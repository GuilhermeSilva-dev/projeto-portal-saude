import { useState } from "react";
import "./style.css";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nome && form.email && form.mensagem) {
      setEnviado(true);
      
      // Simulação de resposta de envio
      setTimeout(() => {
        setEnviado(false);
        setForm({ nome: "", email: "", mensagem: "" });
      }, 4000);
    }
  };

  return (
    <div className="contato-container fade-in">
      <h1 className="page-title">Fale Conosco</h1>
      <p className="page-subtitle">Tem alguma dúvida ou precisa de suporte? Entre em contato preenchendo os campos abaixo.</p>
      
      {enviado && (
        <div className="alert-success">
          🎉 Sua mensagem foi enviada com sucesso! Responderemos em breve.
        </div>
      )}

      {/* Caixa do formulário profissional */}
      <div className="form-card">
        <form onSubmit={handleSubmit} className="contato-form">
          <div className="input-group">
            <label htmlFor="nome">Nome Completo</label>
            <input 
              id="nome"
              type="text" 
              required 
              placeholder="Digite seu nome completo"
              value={form.nome} 
              onChange={e => setForm({...form, nome: e.target.value})} 
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail Corporativo / Pessoal</label>
            <input 
              id="email"
              type="email" 
              required 
              placeholder="exemplo@email.com"
              value={form.email} 
              onChange={e => setForm({...form, email: e.target.value})} 
            />
          </div>

          <div className="input-group">
            <label htmlFor="mensagem">Mensagem / Observação</label>
            <textarea 
              id="mensagem"
              rows="5" 
              required 
              placeholder="Como podemos ajudar você hoje?"
              value={form.mensagem} 
              onChange={e => setForm({...form, mensagem: e.target.value})} 
            />
          </div>

          <button type="submit" className="btn-submit">
            <span>📩</span> Enviar Mensagem
          </button>
        </form>
      </div>
      <div className="faq-section">
  <h2 className="faq-title">Dúvidas Frequentes</h2>
  
  <div className="faq-grid">
    <div className="faq-item">
      <h4>📌 Quais documentos preciso levar para a consulta no SUS?</h4>
      <p>É obrigatório apresentar o Documento de Identidade oficial com foto (RG ou CNH), o Cartão Nacional de Saúde (Cartão SUS) atualizado e o comprovante de residência.</p>
    </div>

    <div className="faq-item">
      <h4>⏱️ Quanto tempo antes devo chegar para meu exame?</h4>
      <p>Recomendamos a chegada com pelo menos 20 minutos de antecedência do horário agendado para a conferência e triagem de documentos na recepção central.</p>
    </div>

    <div className="faq-item">
      <h4>📱 Consigo ver o resultado dos exames pela internet?</h4>
      <p>Sim! Todos os resultados de exames laboratoriais realizados em nossa unidade ficam disponíveis no aplicativo oficial do ConecteSUS ou retirados nos nossos totens.</p>
    </div>
  </div>
</div>
    </div>
  );
}