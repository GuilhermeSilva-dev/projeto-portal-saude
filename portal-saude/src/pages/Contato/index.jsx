import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <>
      <Header />
      <main className="container">
        <h1>Fale Conosco</h1>
        <div className="contato-wrapper">
          <div className="info-contato">
            <p>📞 <strong>Telefone:</strong> (11) 4002-8922</p>
            <p>📍 <strong>Endereço:</strong> Av. da Saúde, 123 - Centro</p>
          </div>
          
          <form onSubmit={handleSubmit} className="form-contato">
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu E-mail" required />
            <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
            <button type="submit">Enviar Mensagem</button>
            {enviado && <p className="sucesso">Mensagem enviada com sucesso!</p>}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
