import { useState } from 'react';
import './index.css';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Narayama Live 🚀</h1>
          <p>Índice de Saúde Econômica Socioambiental em Tempo Real</p>
          <p className="formula">N* = L × ∛(NGII × NCII × NSII)</p>
          <div className="cta-buttons">
            <a href="/dashboard" className="btn btn-primary">Dashboard</a>
            <a href="/simulador" className="btn btn-secondary">Simulador</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <div className="stat-number">27</div>
          <div className="stat-label">Países</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4</div>
          <div className="stat-label">Testes</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2024</div>
          <div className="stat-label">Dados</div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Fique Atualizado</h2>
        <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setEmail(''); }}>
          <input 
            type="email" 
            placeholder="seu@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Inscrever</button>
        </form>
      </section>
    </div>
  );
}
