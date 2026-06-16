import { useState, useEffect } from "react";
import "./style.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cuidado e Dedicação à Sua Saúde",
      text: "A nossa Policlínica Pública oferece atendimento médico de excelência integrado ao SUS, com profissionais qualificados e exames de ponta.",
      buttonText: "📅 Agende uma Consulta",
      tag: "ATENDIMENTO"
    },
    {
      title: "Campanha de Vacinação Atualizada",
      text: "Proteja quem você ama. Compareça à nossa unidade com seu cartão de vacina e documento de identidade. Vacinas salvam vidas!",
      buttonText: "🔍 Ver Calendário",
      tag: "SAÚDE PÚBLICA"
    },
    {
      title: "Exames Laboratoriais Gratuitos",
      text: "Realize seus exames de rotina e check-ups com agilidade. Estrutura moderna e resultados digitais direto no seu celular.",
      buttonText: "🔬 Ver Exames Disponíveis",
      tag: "PREVENÇÃO"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Muda de slide a cada 6 segundos
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="fade-in">
      {/* 🎠 CARROSSEL ESTILO CLIVALE */}
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="slide-content">
              <span className="slide-tag">{slide.tag}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-text">{slide.text}</p>
              <button className="btn-agendar">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
        
        {/* Indicadores de bolinha */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Seção extra de Avisos Rápidos (Upgrade Clivale) */}
      <div className="quick-info-strip">
        <div className="info-item">⏱️ <strong>Horário:</strong> Segunda a Sexta, das 07h às 19h</div>
        <div className="info-item">📍 <strong>Localização:</strong> Senai Dendezeiros</div>
        <div className="info-item">📞 <strong>Disque SUS:</strong> 136 (Informações Gerais)</div>
      </div>
    </div>
  );
}