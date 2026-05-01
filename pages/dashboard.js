import { useState } from 'react';
import './dashboard.css';

export default function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState('brasil');

  const countries = {
    brasil: {
      name: 'Brasil',
      nStar: 5.72,
      ngii: 4.60,
      ncii: 8.52,
      nsii: 18.98,
      status: '✓ Oikonomia'
    },
    mexico: {
      name: 'México',
      nStar: 4.85,
      ngii: 3.20,
      ncii: 7.10,
      nsii: 16.50,
      status: '⚠ Moderado'
    },
    china: {
      name: 'China',
      nStar: 6.20,
      ngii: 5.80,
      ncii: 9.15,
      nsii: 20.30,
      status: '✓ Oikonomia'
    },
    eua: {
      name: 'EUA',
      nStar: 5.95,
      ngii: 4.40,
      ncii: 8.80,
      nsii: 19.50,
      status: '✓ Oikonomia'
    },
    india: {
      name: 'Índia',
      nStar: 3.45,
      ngii: 6.50,
      ncii: 5.20,
      nsii: 12.80,
      status: '✗ Crítico'
    }
  };

  const country = countries[selectedCountry];

  return (
    <div className="dashboard-container">
      <h1>Dashboard de Países</h1>
      
      <div className="dashboard-grid">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Países</h3>
          {Object.entries(countries).map(([key, data]) => (
            <button
              key={key}
              className={`country-btn ${selectedCountry === key ? 'active' : ''}`}
              onClick={() => setSelectedCountry(key)}
            >
              {data.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="n-star-card">
            <h2>Índice N*</h2>
            <div className="n-star-value">{country.nStar}</div>
            <p className="status">{country.status}</p>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <h4>NGII</h4>
              <p className="metric-value">{country.ngii}</p>
              <small>Índice Geracional</small>
            </div>
            <div className="metric-card">
              <h4>NCII</h4>
              <p className="metric-value">{country.ncii}</p>
              <small>Índice Econômico</small>
            </div>
            <div className="metric-card">
              <h4>NSII</h4>
              <p className="metric-value">{country.nsii}</p>
              <small>Índice Ambiental</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
