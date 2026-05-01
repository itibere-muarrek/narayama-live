import { useState } from 'react';
import './faq.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'O que é o índice N*?',
      answer: 'N* é um Índice Integrado de Saúde Econômica Socioambiental que combina fatores geracionais, econômicos, ambientais e legislativos em uma única métrica para avaliar a sustentabilidade de uma economia.'
    },
    {
      question: 'Como é calculado N*?',
      answer: 'N* = L × ∛(NGII × NCII × NSII), onde L é o fator legislativo, NGII é o índice geracional, NCII é o índice econômico e NSII é o índice ambiental.'
    },
    {
      question: 'Quais são os valores de referência?',
      answer: 'N* > 5.5: Oikonomia (Saúde Econômica), 4 < N* ≤ 5.5: Moderado (Atenção Necessária), N* ≤ 4: Crítico (Intervenção Urgente).'
    },
    {
      question: 'Quais países são incluídos?',
      answer: 'Atualmente, o sistema inclui dados de 27 países, com foco especial em Brasil, México, China, EUA e Índia. A cobertura está sendo expandida continuamente.'
    },
    {
      question: 'Com que frequência os dados são atualizados?',
      answer: 'Os dados são atualizados anualmente, refletindo os últimos dados disponíveis de organismos internacionais como World Bank, ONU e OECD.'
    },
    {
      question: 'Como posso usar o Simulador?',
      answer: 'O Simulador permite que você ajuste os parâmetros (NGII, NCII, NSII e L) usando sliders interativos e veja em tempo real como N* muda. Você também pode explorar cenários pré-configurados.'
    },
    {
      question: 'Quais são as fontes de dados?',
      answer: 'Usamos dados de World Bank, ONU, OECD, ILOSTAT, IFR e Ecoinvent - as principais fontes internacionais de indicadores econômicos, demográficos e ambientais.'
    },
    {
      question: 'Como faço para acessar os dados brutos?',
      answer: 'Os dados podem ser acessados através do Dashboard, onde você pode explorar métricas de cada país. Um arquivo CSV com todos os dados estará disponível em breve.'
    },
    {
      question: 'O índice N* é científico?',
      answer: 'Sim, o índice foi desenvolvido com base em metodologia científica rigorosa e passa por testes de falsificabilidade (TRR, TSP, TCE, TCD) para validar sua robustez.'
    },
    {
      question: 'Como posso entrar em contato?',
      answer: 'Envie um email para contato@narayama.live com suas dúvidas, sugestões ou propostas d
