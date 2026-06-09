import React from 'react';
import { FAQ_DATA, type FAQ } from '../data/faqData';
import '../styles/components/table.css';

const FAQTab: React.FC = () => {
  return (
    <div className="tab-content">
      <h2>Perguntas Frequentes (FAQ)</h2>
      <p>Respostas aprofundadas baseadas nos princípios de treinamento de Joe Friel.</p>
      
      <div className="faq-list">
        {FAQ_DATA.map((faq: FAQ, index: number) => (
          <details key={index} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQTab;
