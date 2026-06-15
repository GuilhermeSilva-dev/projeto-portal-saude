import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import CorpoClinico from './pages/CorpoClinico';
import Blog from './pages/Blog';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/corpo-clinico" element={<CorpoClinico />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}