import './style.css';

export default function Home() {
  return (
    <div className="fade-in">
      <h1 className="hero-title">Cuidado e Dedicação à Sua Saúde</h1>
      <p className="hero-text">
        A Vitta Clinic oferece atendimento médico de excelência com profissionais 
        altamente qualificados e tecnologia de ponta.
      </p>
      
      {/* Adicione a classe aqui */}
      <button className="btn-agendar">
        <span>📅</span> Agende uma Consulta
      </button>
    </div>
  );
}