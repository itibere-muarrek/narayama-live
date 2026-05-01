import { useState } from 'react'
import './dashboard.css'

const COUNTRIES = [
  { name: 'Brasil', n_star: 5.72, ngii: 4.60, ncii: 8.52, nsii: 18.98, status: '🟢' },
  { name: 'México', n_star: 4.85, ngii: 3.90, ncii: 7.20, nsii: 15.30, status: '🟡' },
  { name: 'China', n_star: 3.45, ngii: 2.10, ncii: 9.80, nsii: 12.50, status: '🔴' },
  { name: 'EUA', n_star: 6.12, ngii: 5.20, ncii: 9.10, nsii: 20.10, status: '🟢' },
  { name: 'Índia', n_star: 4.30, ngii: 6.50, ncii: 6.80, nsii: 13.20, status: '🟡' },
]

export default function Dashboard() {
  const [selected, setSelected] = useState(0)
  const country = COUNTRIES[selected]

  return (
    <div className="dashboard">
      <h1>📊 Dashboard Global - N*</h1>
      <p className="subtitle">Índice de Sustentabilidade Intergeracional por País</p>

      <div className="dashboard-content">
        <div className="country-selector">
          <h2>Países</h2>
          {COUNTRIES.map((c, i) => (
            <button
              key={i}
              className={`country-btn ${i === selected ? 'active' : ''}`}
              onClick={() => setSelected(i)}
            >
              {c.status} {c.name}
            </button>
          ))}
        </div>

        <div className="country-details">
          <h2>{country.name}</h2>
          <div className="metric-card large">
            <p className="metric-label">Índice N*</p>
            <p className="metric-value">{country.n_star.toFixed(2)}</p>
            <p className="metric-description">
              {country.n_star > 5.5 ? '✓ Sustentável' : country.n_star > 4 ? '⚠ Moderado' : '✗ Crítico'}
            </p>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-label">NGII</p>
              <p className="metric-value">{country.ngii.toFixed(2)}</p>
              <p className="metric-desc">Geracional</p>
            </div>
            <div className="metric-card">
              <p className="metric-label">NCII</p>
              <p className="metric-value">{country.ncii.toFixed(2)}</p>
              <p className="metric-desc">Competitividade</p>
            </div>
            <div className="metric-card">
              <p className="metric-label">NSII</p>
              <p className="metric-value">{country.nsii.toFixed(2)}</p>
              <p className="metric-desc">Sustentabilidade</p>
            </div>
          </div>

          <div className="actions">
            <a href="/simulador" className="btn btn-primary">Simular Cenários</a>
            <a href="/metodologia" className="btn btn-secondary">Ver Metodologia</a>
          </div>
        </div>
      </div>
    </div>
  )
}