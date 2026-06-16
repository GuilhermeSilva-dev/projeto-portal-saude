import { useState } from "react";
import "./style.css";

const medicos = [
  { id: 1, nome: "Dr. Carlos Eduardo", especialidade: "Cardiologia", crm: "CRM/SP 12345", img: "👨‍⚕️" },
  { id: 2, nome: "Dra. Juliana Souza", especialidade: "Pediatria", crm: "CRM/SP 67890", img: "👩‍⚕️" },
  { id: 3, nome: "Dr. Roberto Alencar", especialidade: "Ortopedia", crm: "CRM/SP 54321", img: "👨‍⚕️" },
  { id: 4, nome: "Dra. Beatriz Costa", especialidade: "Dermatologia", crm: "CRM/SP 98765", img: "👩‍⚕️" },
];

export default function CorpoClinico() {
  const [busca, setBusca] = useState("");

  const medicosFiltrados = medicos.filter(medico => 
    medico.nome.toLowerCase().includes(busca.toLowerCase()) ||
    medico.especialidade.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="fade-in">
      <h1 className="page-title">Nosso Corpo Clínico</h1>
      <p className="page-subtitle">Conheça nossos especialistas prontos para cuidar de você.</p>
      
      {/* Container Profissional de Busca */}
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Buscar por nome ou especialidade..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Grid de Cards dos Médicos */}
      <div className="medicos-grid">
        {medicosFiltrados.length > 0 ? (
          medicosFiltrados.map(medico => (
            <div key={medico.id} className="doctor-card">
              <div className="doctor-avatar">{medico.img}</div>
              <div className="doctor-info">
                <h3>{medico.nome}</h3>
                <p className="specialty">{medico.especialidade}</p>
                <span className="crm-badge">{medico.crm}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Nenhum especialista encontrado com esse termo.</p>
        )}
      </div>
    </div>
  );
}