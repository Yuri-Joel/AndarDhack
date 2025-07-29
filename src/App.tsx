import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrolllTop';
import { Home } from './pages/Home';
import SobrePage from './pages/Sobre';
import ResponsabilidadeSocialPage from './pages/Responsabilidade-social';
import ContatoPage from './pages/Contacto';
import PortfolioPage from './pages/Portfolio';
import ServicosPage from './pages/Servicos';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/sobre" element={<SobrePage />} />
          
          <Route path="/responsabilidade-social" element={<ResponsabilidadeSocialPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/servicos" element={<ServicosPage />} />          
      
          {/* Rota para páginas inexistentes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <WhatsAppButton />
    </>
  );
}

export default App;
