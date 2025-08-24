import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smile } from 'lucide-react';

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
            <Smile className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Cabinet Dentaire Charlot</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
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