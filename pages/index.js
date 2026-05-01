import { useState } from 'react'
import './index.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>🌍 Narayama Index</h1>
          <p className="subtitle">Medindo a Sustentabilidade Intergeracional Globalmente</p>
          <p className="description">
            O índice N* quantifica a capacidade de uma nação manter seu desenvolvimento sem comprometer gerações futuras.
          </p>
          <div className="cta-buttons">
            <a href="/dashboard" className="btn btn-primary">Ver Dashboard</a>
            <a href="/simulador" className="btn btn-secondary">Tentar Simulador</a>
          </div>
        </div>
      </section>

      {/* About N* */}
      <section className="about">
        <h2>O que é N*?</h2>
        <div className="formula">
          <p><strong>N* = L × ∛(NGII × NCII × NSII)</strong></p>
          <ul>
            <li><strong>L:</strong> Fator de Globalização</li>
            <li><strong>NGII:</strong> Índice Geracional</li>
            <li><strong>NCII:</strong> Competitividade</li>
            <li><strong>NSII:</strong> Sustentabilidade</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-card">
          <h3>27</h3>
          <p>Países Analisados</p>
        </div>
        <div className="stat-card">
          <h3>4</h3>
          <p>Testes de Falseabilidade</p>
        </div>
        <div className="stat-card">
          <h3>2024</h3>
          <p>Dados Atualizados</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Fique Atualizado</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Inscrever-se</button>
        </form>
        {submitted && <p className="success">✓ Obrigado por se inscrever!</p>}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Narayama Research. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}