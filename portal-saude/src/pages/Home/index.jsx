import { useState, useEffect } from "react";
import "./style.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
    {
      title: "Cuidado e Dedicação à Sua Saúde",
      text: "A Policlínica Pública Humaniza oferece atendimento médico de excelência integrado ao SUS, com profissionais qualificados e exames de ponta.",
      buttonText: "📅 Agende uma Consulta",
      tag: "ATENDIMENTO",
      bgImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Campanha de Vacinação Atualizada",
      text: "Proteja quem você ama. Compareça à nossa unidade com seu cartão de vacina e documento de identidade. Vacinas salvam vidas!",
      buttonText: "🔍 Ver Calendário",
      tag: "SAÚDE PÚBLICA",
      bgImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Exames Laboratoriais Gratuitos",
      text: "Realize seus exames de rotina e check-ups com agilidade. Estrutura moderna e resultados digitais direto no seu celular.",
      buttonText: "🔬 Ver Exames Disponíveis",
      tag: "PREVENÇÃO",
      // 🔬 NOVA URL: Link direto de CDN de alta disponibilidade (Cenário de laboratório/saúde moderno)
      bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Função para avançar o slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Função para voltar o slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Carrossel automático otimizado (sem alertas de dependência no linter)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="fade-in">
      {/* Identidade visual com o nome da clínica */}
      <div className="clinic-welcome">
        <span className="sus-badge">SUS</span>
        <h2>Policlínica Pública Humaniza</h2>
      </div>

      {/*  Carousel de Destaques */}
      <div className="hero-carousel">
        
        {/* Seta de navegação: Anterior */}
        <button className="carousel-arrow left" onClick={prevSlide} aria-label="Slide anterior">
          ❮
        </button>

        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 35%, rgba(15, 23, 42, 0.6) 70%, rgba(15, 23, 42, 0.2) 100%), url(${slide.bgImage})` 
            }}
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
        
        {/* Seta de navegação: Próximo */}
        <button className="carousel-arrow right" onClick={nextSlide} aria-label="Próximo slide">
          ❯
        </button>
        
        {/* Indicadores inferiores (Dots) */}
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

      {/* Barra de Informações Rápidas */}
      <div className="quick-info-strip">
        <div className="info-item">⏱️ <strong>Horário:</strong> Segunda a Sexta, das 07h às 19h</div>
        <div className="info-item">📍 <strong>Localização:</strong> Bloco Central de Especialidades</div>
        <div className="info-item">📞 <strong>Disque SUS:</strong> 136 (Informações Gerais)</div>
      </div>
    </div>
  );
}