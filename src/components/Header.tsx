import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded mr-2 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Cabinet Dentaire Charlot</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Accueil
              </Link>
              <Link 
                to="/dr-charlot-veronique" 
                className={`transition-colors ${isActive('/dr-charlot-veronique') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Dr Charlot Véronique
              </Link>
              <Link 
                to="/dr-charlot-olivia" 
                className={`transition-colors ${isActive('/dr-charlot-olivia') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Dr Charlot Olivia
              </Link>
              <Link 
                to="/orthodontie" 
                className={`transition-colors ${isActive('/orthodontie') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Orthodontie
              </Link>
              <Link 
                to="/infos-pratiques" 
                className={`transition-colors ${isActive('/infos-pratiques') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Infos Pratiques
              </Link>
            </nav>
            <a 
              href="https://www.doctolib.fr/dentiste/change/olivia-charlot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold text-sm inline-flex items-center ml-4"
            >
              <span className="mr-1">📅</span>
              Rendez-vous orthodontie
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;