import fs from 'node:fs/promises'
import path from 'node:path'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'

const inputPath = path.resolve(process.cwd(), 'OZilla Professional.pdf')
const outputPath = path.resolve(process.cwd(), 'tmp', 'ozilla_prof_text.txt')

await fs.mkdir(path.dirname(outputPath), { recursive: true })

const loadingTask = getDocument(inputPath)
const pdf = await loadingTask.promise

let out = `File: ${inputPath}\nPages: ${pdf.numPages}\n\n`

for (let i = 1; i <= pdf.numPages; i += 1) {
  const page = await pdf.getPage(i)
  const textContent = await page.getTextContent()
  const strings = textContent.items
    .map((item) => ('str' in item ? item.str : ''))
    .filter(Boolean)

  out += `--- Page ${i} ---\n`
  out += strings.join(' ')
  out += '\n\n'
}

await fs.writeFile(outputPath, out, 'utf8')
console.log(`Extracted text saved to ${outputPath}`)
