import { useState } from 'react'
import styles from './simulador.module.css'

export default function Simulador() {
  const [ngii, setNgii] = useState(4.6)
  const [ncii, setNcii] = useState(8.5)
  const [nsii, setNsii] = useState(19)
  const [l, setL] = useState(0.63)

  const n_star = l * Math.pow(ngii * ncii * nsii, 1/3)

  const getStatus = () => {
    if (n_star > 5.5) return { text: '✓ Oikonomia', color: '#10b981' }
    if (n_star > 4) return { text: '⚠ Moderado', color: '#f59e0b' }
    return { text: '✗ Crítico', color: '#ef4444' }
  }

  const status = getStatus()

  return (
    <div className="simulador">
      <h1>🎮 Simulador Contrafactual</h1>
      <p className="subtitle">Ajuste os parâmetros e veja como N* muda</p>

      <div className="sim-container">
        <div className="sim-controls">
          <div className={styles['control-group']}>
            <label>NGII (Geracional): {ngii.toFixed(2)}</label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="0.1"
              value={ngii}
              onChange={(e) => setNgii(parseFloat(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles['control-group']}>
            <label>NCII (Competitividade): {ncii.toFixed(2)}</label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="0.1"
              value={ncii}
              onChange={(e) => setNcii(parseFloat(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles['control-group']}>
            <label>NSII (Sustentabilidade): {nsii.toFixed(2)}</label>
            <input 
              type="range" 
              min="1" 
              max="30" 
              step="0.1"
              value={nsii}
              onChange={(e) => setNsii(parseFloat(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles['control-group']}>
            <label>L (Globalização): {l.toFixed(2)}</label>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01"
              value={l}
              onChange={(e) => setL(parseFloat(e.target.value))}
              className={styles.slider}
            />
          </div>
        </div>

        <div className="sim-result">
          <div className={styles['result-card']}>
            <h2>Resultado</h2>
            <p className="formula">N* = L × ∛(NGII × NCII × NSII)</p>
            <div className="result-value" style={{ color: status.color }}>
              {n_star.toFixed(2)}
            </div>
            <p className={styles['result-status']} style={{ color: status.color }}>
              {status.text}
            </p>
            <p className="result-desc">
              {n_star > 5.5 
                ? 'País com sustentabilidade intergeracional garantida'
                : n_star > 4
                ? 'País com sustentabilidade moderada - ações necessárias'
                : 'País com risco de sustentabilidade - intervenção urgente'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="scenarios">
        <h2>Cenários Pré-configurados</h2>
        <button 
          className={styles['scenario-btn']}
          onClick={() => { setNgii(4.6); setNcii(8.5); setNsii(19); setL(0.63); }}
        >
          🇧🇷 Brasil 2024
        </button>
        <button 
          className={styles['scenario-btn']}
          onClick={() => { setNgii(6.5); setNcii(9.5); setNsii(25); setL(0.8); }}
        >
          🌟 Cenário Ideal
        </button>
        <button 
          className={styles['scenario-btn']}
          onClick={() => { setNgii(2); setNcii(5); setNsii(10); setL(0.4); }}
        >
          ⚠️ Cenário Crítico
        </button>
      </div>

      <div className="actions">
        <a href="/dashboard" className="btn btn-secondary">Voltar ao Dashboard</a>
      </div>
    </div>
  )
}