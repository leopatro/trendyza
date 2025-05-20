import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Sobre a Trendyza</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-light mb-6">
              A Trendyza nasceu com o propósito de conectar você às melhores oportunidades do mercado digital. 
              Somos uma curadoria independente de produtos confiáveis e inovadores — selecionados com base em 
              qualidade, reputação e benefício real.
            </p>
            <p className="text-light">
              Seja um curso, um produto de bem-estar ou uma ferramenta prática do dia a dia, cada indicação aqui 
              tem um objetivo: entregar valor e facilitar sua decisão de compra. Com linguagem acessível, visual 
              moderno e total transparência, queremos ser sua referência em escolhas inteligentes na internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;