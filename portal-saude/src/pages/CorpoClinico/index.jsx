import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

export default function CorpoClinico() {
  const medicos = [
    { nome: "Dra. Ana Silva", especialidade: "Cardiologia" },
    { nome: "Dr. Carlos Oliveira", especialidade: "Pediatria" },
    { nome: "Dra. Juliana Costa", especialidade: "Clínica Geral" }
  ];

  return (
    <>
      <Header />
      <main className="container">
        <h1>Nosso Corpo Clínico</h1>
        <div className="grid-medicos">
          {medicos.map((medico, index) => (
            <div key={index} className="card-medico">
              <h3>{medico.nome}</h3>
              <p>Especialidade: <strong>{medico.especialidade}</strong></p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
