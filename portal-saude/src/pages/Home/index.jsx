import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <h1>Cuidado e Dedicação à Sua Saúde</h1>
          <p>A Vitta Clinic oferece atendimento médico de excelência com profissionais altamente qualificados e tecnologia de ponta.</p>
          <button className="cta-button">Agende uma Consulta</button>
        </section>
      </main>
      <Footer />
    </>
  );
}
