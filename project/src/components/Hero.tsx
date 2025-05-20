import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Descubra produtos incríveis, selecionados por quem entende de tendência.
          </h1>
          <p className="text-lg md:text-xl text-light mb-8">
            Na Trendyza, você encontra cursos, saúde, tecnologia e mais, escolhidos a dedo.
          </p>
          <a href="#featured" className="btn btn-primary text-lg">
            Explorar agora
          </a>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary/10 -z-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-secondary/10 -z-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-primary/20 -z-10 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;