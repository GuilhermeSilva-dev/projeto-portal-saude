import { useState } from "react";
import './style.css';

export default function Servicos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const listaServicos = [
    { nome: "Consultas Médicas", cat: "consultas", desc: "Clínica geral, pediatria, cardiologia e ortopedia especializada." },
    { nome: "Exames Laboratoriais", cat: "exames", desc: "Análises clínicas completas, sangue, urina e exames preventivos." },
    { nome: "Atendimento de Urgência", cat: "urgencia", desc: "Triagem rápida e atendimento para casos de baixa complexidade." },
    { nome: "Check-up Geral", cat: "prevencao", desc: "Avaliação médica anual completa para acompanhamento preventivo." },
    { nome: "Fisioterapia", cat: "consultas", desc: "Sessões de reabilitação motora e acompanhamento fisioterapêutico." },
    { nome: "Raio-X e Imagem", cat: "exames", desc: "Diagnósticos por imagem digitais com laudos rápidos integrados." }
  ];

  // Filtra de acordo com o botão clicado
  const servicosFiltrados = categoriaAtiva === "todos" 
    ? listaServicos 
    : listaServicos.filter(s => s.cat === categoriaAtiva);

  return (
    <div className="fade-in">
      <h1 className="page-title">Nossos Serviços</h1>
      
      {/* 🔘 BOTÕES DE FILTRO ESTILO CLIVALE */}
      <div className="filter-container">
        <button className={`filter-btn ${categoriaAtiva === "todos" ? "active" : ""}`} onClick={() => setCategoriaAtiva("todos")}>📋 Todos</button>
        <button className={`filter-btn ${categoriaAtiva === "consultas" ? "active" : ""}`} onClick={() => setCategoriaAtiva("consultas")}>🩺 Consultas</button>
        <button className={`filter-btn ${categoriaAtiva === "exames" ? "active" : ""}`} onClick={() => setCategoriaAtiva("exames")}>🔬 Exames</button>
        <button className={`filter-btn ${categoriaAtiva === "urgencia" ? "active" : ""}`} onClick={() => setCategoriaAtiva("urgencia")}>🚨 Urgência</button>
      </div>
      
      <div className="grid-servicos">
        {servicosFiltrados.map((servico, index) => (
          <div key={index} className="service-card">
            <h3>{servico.nome}</h3>
            <p>{servico.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}