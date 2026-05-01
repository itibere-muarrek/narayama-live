import { useState } from 'react'
import './faq.css'

const FAQS = [
  {
    q: 'O que é o índice N*?',
    a: 'N* é o Narayama Index, uma medida sintética que quantifica a capacidade de uma nação manter seu desenvolvimento sem comprometer gerações futuras. Combina dimensões geracional, econômica e ambiental.'
  },
  {
    q: 'Como N* é calculado?',
    a: 'A fórmula é: N* = L × ∛(NGII × NCII × NSII), onde L é o fator de globalização e os três índices medem gerações, competitividade e sustentabilidade respectivamente.'
  },
  {
    q: 'Qual é a escala de N*?',
    a: 'N* varia de 0 a 10. Valores acima de 5.5 indicam sustentabilidade garantida (Oikonomia). Entre 4 e 5.5 indicam sustentabilidade moderada. Abaixo de 4, há risco crítico.'
  },
  {
    q: 'Com que frequência os dados são atualizados?',
    a: 'Os dados são atualizados anualmente usando as últimas publicações do Banco Mundial, ONU, OCDE e outras fontes oficiais internacionais.'
  },
  {
    q: 'O modelo pode ser refutado?',
    a: 'Sim! O modelo inclui 4 testes de falseabilidade (TRR, TSP, TCE, TCD) que permitem refutar o índice se certas condições não forem atendidas. Isso o torna científico.'
  },
  {
    q: 'Posso usar N* para política pública?',
    a: 'Sim, N* foi desenvolvido para informar decisões de política pública. Vários países já usam o índice em seus planejamentos estratégicos.'
  },
  {
    q: 'Como acesso os dados brutos?',
    a: 'Todos os dados de entrada estão documentados com suas fontes. Os arquivos CSV podem ser baixados através do dashboard administrativo.'
  },
  {
    q: 'Posso comparar países?',
    a: 'Sim! O dashboard permite comparar N* entre os 27 países analisados, bem como visualizar tendências ao longo do tempo.'
  },
  {
    q: 'E se discordar dos resultados?',
    a: 'Você pode usar o simulador para ajustar parâmetros e ver como mudanças afetam N*. Além disso, feedback é bem-vindo através do contato no site.'
  },
  {
    q: 'Há uma versão acadêmica?',
    a: 'Sim! Um paper científico completo está em preparação para submissão a revistas peer-reviewed internacionais.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq">
      <h1>❓ Perguntas Frequentes</h1>
      <p className="subtitle">Respostas sobre o Índice N* e como usar</p>

      <div className="faq-container">
        {FAQS.map((item, idx) => (
          <div key={idx} className="faq-item">
            <button
              className={`faq-question ${openIndex === idx ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{item.q}</span>
              <span className="toggle">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-cta">
        <h2>Não encontrou sua pergunta?</h2>
        <p>Entre em contato conosco através do formulário abaixo</p>
        <a href="mailto:contato@narayama.live" className="btn btn-primary">
          Enviar Email
        </a>
      </div>
    </div>
  )
}