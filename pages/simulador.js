import { useState } from 'react';
import './simulador.css';

export default function Simulador() {
  const [ngii, setNgii] = useState(4.6);
  const [ncii, setNcii] = useState(8.52);
  const [nsii, setNsii] = useState(18.98);
  const [l, setL] = useState(0.8);

  const calculateNStar = () => {
    return (l * Math.pow(ngii * ncii * nsii, 1/3)).toFixed(2);
  };

  const nStar = calculateNStar();

  const getStatus = () => {
    if (nStar > 5.5) return '✓ Oikonomia';
    if (nStar > 4) return '⚠ Moderado';
    return '✗ Crítico';
  };

  const applyScenario = (scenario) => {
    if (scenario === 'brasil') {
      setNgii(4.6);
      setNcii(8.52);
      setNsii(18.98);
      setL(0.8);
    } else if (scenario === 'ideal') {
      setNgii(7);
      setNcii(10);
      setNsii(25);
      setL(1);
    } else if (scenario === 'critico') {
      setNgii(2);
      setNcii(3);
      setNsii(8);
      setL(0.4);
    }
  };

  return (
    <div className="simulador-container">
      <h1>Simulador N*</h1>
      
      <div className="simulador-grid">
        {/* Controls */}
        <div className="controls">
          <h3>Parâmetros</h3>
          
          <div className="control-group">
            <label>NGII (Geracional): {ngii.toFixed(2)}</label>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={ngii}
              onChange={(e) => setNgii(parseFloat(e.target.value))}
              className="slider"
            />
          </div>

          <div className="control-group">
            <label>NCII (Econômico): {ncii.toFixed(2)}</label>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={ncii}
              onChange={(e) => setNcii(parseFloat(e.target.value))}
              className="slider"
            />
          </div>

          <div className="control-group">
            <label>NSII (Ambiental): {nsii.toFixed(2)}</label>
            <input
              type="range"
              min="1"
              max="30"
              step="0.1"
              value={nsii}
              onChange={(e) => setNsii(parseFloat(e.target.value))}
              className="slider"
            />
          </div>

          <div className="control-group">
            <label>L (Legislação): {l.toFixed(2)}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={l}
              onChange={(e) => setL(parseFloat(e.target.value))}
              className="slider"
            />
          </div>

          <h3 style={{ marginTop: '30px' }}>Cenários</h3>
          <button className="scenario-btn" onClick={() => applyScenario('brasil')}>
            Brasil 2024
          </button>
          <button className="scenario-btn" onClick={() => applyScenario('ideal')}>
            Cenário Ideal
          </button>
          <button className="scenario-btn" onClick={() => applyScenario('critico')}>
            Cenário Crítico
          </button>
        </div>

        {/* Results */}
        <div className="results">
          <div className="result-card">
            <h2>Resultado</h2>
            <div className="n-star-display">{nStar}</div>
            <p className="result-status">{getStatus()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
