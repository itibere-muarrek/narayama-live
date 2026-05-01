import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  const countries = [
    { name: 'Brasil', status: 'up', color: '#2563eb' },
    { name: 'Argentina', status: 'balanced', color: '#eab308' },
    { name: 'EUA', status: 'down', color: '#dc2626' },
    { name: 'China', status: 'up', color: '#2563eb' },
    { name: 'Japão', status: 'balanced', color: '#eab308' },
  ];

  const getArrow = (status) => {
    switch(status) {
      case 'up': return '⬆️';
      case 'down': return '⬇️';
      case 'balanced': return '↔️';
      default: return '—';
    }
  };

  return (
    <>
      <Head>
        <title>Narayama Index - Medindo Sustentabilidade Intergeneracional</title>
        <meta name="description" content="Índice de Sustentabilidade Intergeneracional Global" />
      </Head>

      <div className={styles.container}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles['hero-content']}>
            <h1>🌍 Narayama Index</h1>
            <p className={styles.subtitle}>Medindo a Sustentabilidade Intergeneracional Globalmente</p>
            <p className={styles.description}>
              O Narayama Index quantifica a capacidade de uma nação manter seu desenvolvimento 
              sem comprometer gerações futuras.
            </p>
            <p className={styles.status}>
              <em>⏳ Status: Em desenvolvimento e testes</em>
            </p>
          </div>
        </section>

        {/* 5 PAÍSES COM INDICADORES */}
        <section className={styles['countries-section']}>
          <h2>Índice dos 5 Países Selecionados</h2>
          <div className={styles['countries-grid']}>
            {countries.map((country) => (
              <div key={country.name} className={styles['country-card']}>
                <div className={styles['country-header']}>
                  <h3>{country.name}</h3>
                  <span className={styles['arrow']} style={{ color: country.color }}>
                    {getArrow(country.status)}
                  </span>
                </div>
                <div className={styles['status-indicator']}>
                  {country.status === 'up' && <p style={{ color: '#2563eb' }}>Sustentabilidade</p>}
                  {country.status === 'balanced' && <p style={{ color: '#eab308' }}>Equilíbrio</p>}
                  {country.status === 'down' && <p style={{ color: '#dc2626' }}>Insustentabilidade</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EMAIL VALIDATION PARA 27 PAÍSES */}
        <section className={styles['validation-section']}>
          <h2>Acesse o Índice de 27 Países</h2>
          <p>Valide seu email para ter acesso aos dados completos de sustentabilidade global.</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert('Funcionalidade de validação em desenvolvimento');
          }}>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              required 
              className={styles['email-input']}
            />
            <button type="submit" className={styles['submit-btn']}>
              Validar Email
            </button>
          </form>
          <p className={styles['countries-list-hint']}>
            27 países: Argentina, Austrália, Áustria, Bangladesh, Bélgica, Brasil, Canadá, China, Cingapura, Colômbia, Coreia do Sul, Dinamarca, Egito, Emirados Árabes, Espanha, EUA, Finlândia, França, Grécia, Holanda, Índia, Indonésia, Irã, Itália, Japão, México, Reino Unido, Rússia, Suécia...
          </p>
        </section>
      </div>
    </>
  );
}