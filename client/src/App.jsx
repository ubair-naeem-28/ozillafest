import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AppRouter from './routes/AppRouter'
import SolarParticleSwarmBackground from './components/common/SolarParticleSwarmBackground'

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter
      basename={basename || undefined}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <AuthProvider>
        <SolarParticleSwarmBackground />
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
