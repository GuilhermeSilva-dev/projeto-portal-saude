import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './style.css';

export default function Header() {
  return (
    <header className="main-header">
      <Logo />
      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/corpo-clinico">Corpo Clínico</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contato" className="btn-contato">Contato</Link>
      </nav>
    </header>
  );
}