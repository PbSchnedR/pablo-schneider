import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Presentation_bts from './pages/Presentation_bts';
import Projets from './pages/projets/Projets';
import Veille from './pages/Veille';
import LMDC from './pages/LMDC';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>    
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/presentation-bts" element={<Presentation_bts />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/veille-technologique" element={<Veille />} />
        <Route path="/LMDC" element={<LMDC />} />
      </Routes>
    </Router>
  );
}

export default App;
