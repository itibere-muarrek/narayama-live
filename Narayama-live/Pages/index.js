import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [backendStatus, setBackendStatus] = useState('checking...')

  useEffect(() => {
    checkBackend()
  }, [])

  const checkBackend = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/health`)
      setBackendStatus('✅ Backend Online')
    } catch (error) {
      setBackendStatus('❌ Backend Offline')
    }
  }

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '800px', margin: '50px auto', textAlign: 'center' }}>
      <h1>🌍 NARAYAMA.LIVE</h1>
      <p>Portal de Sustentabilidade Intergeracional</p>
      
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
        <h2>Status do Sistema</h2>
        <p style={{ fontSize: '18px', color: '#333' }}>{backendStatus}</p>
        <button 
          onClick={checkBackend}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Verificar Novamente
        </button>
      </div>

      <div style={{ marginTop: '50px', textAlign: 'left', backgroundColor: '#efefef', padding: '20px', borderRadius: '8px' }}>
        <h3>O que é N*?</h3>
        <p>O Índice Narayama (N*) mede a sustentabilidade intergeracional de um país.</p>
        <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '4px' }}>
{`N* = L × ∛(NGII × NCII × NSII)

Resultado:
• N* > 6.0 = OIKONOMIA ✅ (sustentável)
• 4.0 < N* < 6.0 = TRANSIÇÃO ⚠️
• 2.0 < N* < 4.0 = METABOLISMO 🔴
• N* < 2.0 = COLAPSO ❌`}
        </pre>
      </div>

      <footer style={{ marginTop: '50px', color: '#999', fontSize: '12px' }}>
        <p>NARAYAMA.LIVE v1.0 | Backend: AINU.SYSTEMS v4.0</p>
      </footer>
    </div>
  )
}