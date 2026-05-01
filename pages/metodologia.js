import './metodologia.css'

export default function Metodologia() {
  return (
    <div className="metodologia">
      <h1>📚 Metodologia do Índice N*</h1>
      <p className="subtitle">Compreenda como medimos a sustentabilidade intergeracional</p>

      <div className="content">
        <section className="section">
          <h2>🎯 A Fórmula Principal</h2>
          <div className="formula-box">
            <p className="big-formula">N* = L × ∛(NGII × NCII × NSII)</p>
          </div>
          <p>O índice N* (Narayama Index) é uma medida sintética que combina três dimensões críticas da sustentabilidade através de uma média geométrica ponderada.</p>
        </section>

        <section className="section">
          <h2>📊 Os 6 Componentes</h2>
          
          <div className="component">
            <h3>1. NGII - Índice de Gerações</h3>
            <p><strong>Fórmula:</strong> (Pop 0-25 / Pop 65+) × (Nascimentos / Mortes)</p>
            <p>Mede a vitalidade demográfica e capacidade reprodutiva da população.</p>
          </div>

          <div className="component">
            <h3>2. NCII - Índice de Competitividade</h3>
            <p><strong>Fórmula:</strong> (VA / Emprego) × (Salários / VA)</p>
            <p>Avalia a produtividade econômica e distribuição de renda.</p>
          </div>

          <div className="component">
            <h3>3. NSII - Índice de Sustentabilidade</h3>
            <p><strong>Fórmula:</strong> [VA / Pessoas] / [(Regen + Desc + Recicl) / (Log + DescExt)]</p>
            <p>Mede a eficiência de recursos e capacidade de regeneração ambiental.</p>
          </div>

          <div className="component">
            <h3>4. L - Fator de Globalização</h3>
            <p><strong>Fórmula:</strong> 0.4×RET + 0.3×COMP + 0.3×SYM</p>
            <p>Combina Resiliência, Complementaridade e Simetria comercial.</p>
          </div>

          <div className="component">
            <h3>5. EIS - Índice de Sustentabilidade Educacional</h3>
            <p><strong>Fórmula:</strong> (I_HC / C_65+) × λ × L</p>
            <p>Avalia o capital humano disponível para gerações futuras.</p>
          </div>

          <div className="component">
            <h3>6. IVAT - Índice de Valor Agregado</h3>
            <p><strong>Fórmula:</strong> τ × VA_auto × λ</p>
            <p>Mede a capacidade de automação e retenção de valor.</p>
          </div>
        </section>

        <section className="section">
          <h2>✅ Testes de Falseabilidade</h2>
          <p>O modelo é científico porque pode ser refutado por 4 testes rigorosos:</p>
          
          <div className="test">
            <h3>TRR - Teste de Restrição Reprodutiva</h3>
            <p>Falha se diferença entre taxa de natalidade nativa e imigrante &gt; 15%</p>
          </div>

          <div className="test">
            <h3>TSP - Teste de Sustentação Produtiva</h3>
            <p>Falha se produtividade sistêmica (ψ) &lt; 5%</p>
          </div>

          <div className="test">
            <h3>TCE - Teste de Consistência Empírica</h3>
            <p>Falha se correlação com índices externos &gt; 0.40</p>
          </div>

          <div className="test">
            <h3>TCD - Teste de Composição Demográfica</h3>
            <p>Falha se mudança demográfica &gt; 30% em 5 anos</p>
          </div>
        </section>

        <section className="section">
          <h2>🌍 Fontes de Dados</h2>
          <ul>
            <li><strong>Banco Mundial:</strong> PIB, comércio, população</li>
            <li><strong>ONU:</strong> Demografia, nascimentos, mortes</li>
            <li><strong>OCDE:</strong> Educação, contas nacionais</li>
            <li><strong>ILOSTAT:</strong> Emprego, salários</li>
            <li><strong>IFR:</strong> Índices de automação</li>
            <li><strong>Ecoinvent:</strong> Dados ambientais</li>
          </ul>
        </section>

        <section className="section cta">
          <h2>Quer explorar mais?</h2>
          <div className="cta-buttons">
            <a href="/simulador" className="btn btn-primary">Simular Cenários</a>
            <a href="/dashboard" className="btn btn-secondary">Ver Dashboard</a>
            <a href="/faq" className="btn btn-secondary">Perguntas Frequentes</a>
          </div>
        </section>
      </div>
    </div>
  )
}