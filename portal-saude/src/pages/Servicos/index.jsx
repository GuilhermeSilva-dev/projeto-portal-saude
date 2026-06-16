import './style.css';

export default function Servicos() {
  const servicos = ["Consultas Médicas", "Exames Laboratoriais", "Atendimento de Urgência", "Check-up Geral", "Fisioterapia"];

  return (
    <div className="fade-in">
      <h1 className="page-title">Nossos Serviços</h1>
      
      <div className="grid-servicos">
        {servicos.map((servico, index) => (
          <div key={index} className="service-card">
            <h3>{servico}</h3>
            <p>Atendimento especializado com foco no seu bem-estar.</p>
          </div>
        ))}
      </div>
    </div>
  );
}