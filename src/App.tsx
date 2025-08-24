import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CharlotVeroniquePage from './pages/CharlotVeroniquePage';
import CharlotOliviaPage from './pages/CharlotOliviaPage';
import OrthodonitePage from './pages/OrthodonitePage';
import InfosPratiquesPage from './pages/InfosPratiquesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dr-charlot-veronique" element={<CharlotVeroniquePage />} />
          <Route path="/dr-charlot-olivia" element={<CharlotOliviaPage />} />
          <Route path="/orthodontie" element={<OrthodonitePage />} />
          <Route path="/infos-pratiques" element={<InfosPratiquesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;