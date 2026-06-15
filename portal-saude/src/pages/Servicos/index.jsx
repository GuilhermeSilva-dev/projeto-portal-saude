import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

export default function Servicos() {
  const servicos = ["Consultas Médicas", "Exames Laboratoriais", "Atendimento de Urgência", "Check-up Geral", "Fisioterapia"];

  return (
    <>
      <Header />
      <main className="container">
        <h1>Nossos Serviços</h1>
        <div className="grid-servicos">
          {servicos.map((servico, index) => (
            <div key={index} className="card-servico">
              <h3>{servico}</h3>
              <p>Atendimento especializado com foco no seu bem-estar.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
