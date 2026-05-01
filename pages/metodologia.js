import './metodologia.css';

export default function Metodologia() {
  return (
    <div className="metodologia-container">
      <h1>Metodologia</h1>

      <section className="section">
        <h2>Fórmula N*</h2>
        <div className="formula-box">
          N* = L × ∛(NGII × NCII × NSII)
        </div>
        <p>Índice Integrado de Saúde Econômica Socioambiental</p>
      </section>

      <section className="section">
        <h2>Componentes</h2>
        
        <div className="component-card">
          <h3>1. NGII - Índice Geracional</h3>
          <div className="formula-box">NGII = (Pop 0-25 / Pop 65+) × (Nascimentos / Mortes)</div>
          <p>Avalia a capacidade de renovação geracional e dinamismo populacional.</p>
        </div>

        <div className="component-card">
          <h3>2. NCII - Índice Econômico</h3>
          <div className="formula-box">NCII = (VA / Emprego) × (Salários / VA)</div>
          <p>Mede produtividade, distribuição de renda e força de trabalho.</p>
        </div>

        <div className="component-card">
          <h3>3. NSII - Índice Ambiental</h3>
          <div className="formula-box">NSII = [VA / Pessoas] / [(Regen + Desc + Recicl) / (Log + DescExt)]</div>
          <p>Avalia sustentabilidade ambiental e capacidade de regeneração.</p>
        </div>

        <div className="component-card">
          <h3>4. L - Legislação</h3>
          <div className="formula-box">L = 0.4×RET + 0.3×COMP + 0.3×SYM</div>
          <p>Reflete qualidade institucional e marco regulatório.</p>
        </div>

        <div className="component-card">
          <h3>5. EIS - Saúde Econômica</h3>
          <div className="formula-box">EIS = (I_HC / C_65+) × λ × L</div>
          <p>Índice de sustentabilidade econômica integrada.</p>
        </div>

        <div className="component-card">
          <h3>6. IVAT - Índice de Val
