import "./style.css";

export default function QuemSomos() {
  return (
    <div className="quem-somos-container fade-in">
      <h1 className="page-title">Quem Somos</h1>
      
      <section className="history-section">
        <p className="lead-text">
          Fundado em 2010, o <strong>Vitalis Instituto Clínico</strong> nasceu com o firme propósito 
          de humanizar o atendimento médico e integrar especialidades para oferecer uma jornada 
          de cuidado completa ao paciente.
        </p>
        <p className="body-text">
          Ao longo de mais de uma década de dedicação, evoluímos de um pequeno consultório para um centro 
          médico de referência. Unimos uma infraestrutura tecnológica de ponta a um corpo clínico composto 
          por profissionais altamente qualificados e, acima de tudo, empáticos. Acreditamos que a medicina 
          verdadeira se faz combinando precisão científica com acolhimento legítimo.
        </p>
      </section>

      {/* Grid de Pilares Institucionais */}
      <div className="mvv-grid">
        <div className="mvv-card">
          <div className="mvv-icon">🎯</div>
          <h3>Missão</h3>
          <p>Oferecer serviços de saúde com excelência, precisão diagnóstica e acolhimento humano, promovendo qualidade de vida e bem-estar em cada etapa do atendimento.</p>
        </div>

        <div className="mvv-card">
          <div className="mvv-icon">👁️</div>
          <h3>Visão</h3>
          <p>Ser reconhecido como o principal centro de referência em medicina integrada da região, mantendo a vanguarda tecnológica sem perder a essência do cuidado humanizado.</p>
        </div>

        <div className="mvv-card">
          <div className="mvv-icon">⚖️</div>
          <h3>Valores</h3>
          <p>Nossa atuação é blindada pela ética inegociável, respeito absoluto à vida, inovação constante, transparência nas relações e empatia profunda com nossos pacientes.</p>
        </div>
      </div>
    </div>
  );
}