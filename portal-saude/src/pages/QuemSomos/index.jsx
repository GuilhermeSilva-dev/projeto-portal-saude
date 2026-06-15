import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

export default function QuemSomos() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Quem Somos</h1>
        <p>Fundada em 2010, a Vitta Clinic nasceu com o propósito de humanizar o atendimento médico. Nossos valores são baseados na ética, inovação e no respeito absoluto à vida.</p>
      </main>
      <Footer />
    </>
  );
}
