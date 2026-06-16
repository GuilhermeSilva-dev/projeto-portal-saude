import { Link, useLocation } from "react-router-dom";
import "./style.css";

export default function Header({ theme, toggleTheme }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo">
          🏥 Policlínica Regional Cuidar
        </Link>
        
        <nav className="nav-menu">
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/quem-somos" className={isActive("/quem-somos")}>Quem Somos</Link>
          <Link to="/servicos" className={isActive("/servicos")}>Serviços</Link>
          <Link to="/corpo-clinico" className={isActive("/corpo-clinico")}>Corpo Clínico</Link>
          <Link to="/blog" className={isActive("/blog")}>Blog</Link>
          <Link to="/contato" className={isActive("/contato")}>Contato</Link>
        </nav>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
}