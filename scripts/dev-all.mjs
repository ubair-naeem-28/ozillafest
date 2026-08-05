import { spawn } from 'node:child_process'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'

const rootDir = process.cwd()
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const isWindows = process.platform === 'win32'

function isPortBusy(port) {
  if (!isWindows) return false

  try {
    const output = execFileSync('netstat', ['-ano', '-p', 'tcp'], { encoding: 'utf8' })
    return output.split(/\r?\n/).some((line) => {
      const parts = line.trim().split(/\s+/)
      return parts[0] === 'TCP' && parts[3] === 'LISTENING' && (parts[1] || '').endsWith(`:${port}`)
    })
  } catch (_error) {
    return false
  }
}

function findOpenPort(preferredPort) {
  let port = preferredPort
  while (isPortBusy(port)) {
    port += 1
  }
  return port
}

const processes = [
  {
    name: 'server',
    cwd: path.join(rootDir, 'server'),
    args: ['run', 'dev']
  },
  {
    name: 'client',
    cwd: path.join(rootDir, 'client'),
    args: ['run', 'dev']
  }
]

const serverPort = findOpenPort(5000)
const clientPort = findOpenPort(8080)

if (serverPort !== 5000) {
  process.stdout.write(`Port 5000 is still busy, using backend port ${serverPort}.\n`)
}

if (clientPort !== 8080) {
  process.stdout.write(`Port 8080 is still busy, open frontend at http://localhost:${clientPort}/\n`)
}

const children = processes.map((item) => {
  const command = isWindows ? process.env.ComSpec || 'cmd.exe' : npmCmd
  const args = isWindows ? ['/d', '/s', '/c', `${npmCmd} ${item.args.join(' ')}`] : item.args
  const childEnv = {
    ...process.env,
    PORT: item.name === 'server' ? String(serverPort) : String(clientPort),
    VITE_API_BASE_URL: `http://localhost:${serverPort}/api`
  }

  const child = spawn(command, args, {
    cwd: item.cwd,
    env: childEnv,
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: false
  })

  child.stdout.on('data', (data) => {
    process.stdout.write(`[${item.name}] ${data}`)
  })

  child.stderr.on('data', (data) => {
    process.stderr.write(`[${item.name}] ${data}`)
  })

  child.on('exit', (code) => {
    if (code && code !== 0) {
      process.stderr.write(`[${item.name}] exited with code ${code}\n`)
    }
  })

  return child
})

function shutdown() {
  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM')
    }
  }
}

process.on('SIGINT', () => {
  shutdown()
  process.exit(0)
})

process.on('SIGTERM', () => {
  shutdown()
  process.exit(0)
})
