import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-400 rounded mr-2 flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold">Cabinet Charlot</span>
            </div>
            <p className="text-gray-400">
              Cabinet dentaire moderne à Changé (72), spécialisé en dentisterie générale et orthodontie.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Accueil</Link>
              <Link to="/dr-charlot-veronique" className="block text-gray-400 hover:text-white transition-colors">Dr Charlot Véronique</Link>
              <Link to="/dr-charlot-olivia" className="block text-gray-400 hover:text-white transition-colors">Dr Charlot Olivia</Link>
              <Link to="/orthodontie" className="block text-gray-400 hover:text-white transition-colors">Orthodontie</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Prise de rendez-vous<br/>orthodontie</h4>
            <div className="space-y-2 text-gray-400">
              <a 
                href="https://www.doctolib.fr/dentiste/change/olivia-charlot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Doctolib
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horaires</h4>
            <div className="text-gray-400 space-y-1">
              <p className="font-semibold text-gray-300">Dr Charlot Véronique</p>
              <p>Lun - Jeu : 9h - 12h, 14h-18h30</p>
              <p className="font-semibold text-gray-300 mt-2">Dr Charlot Olivia</p>
              <p>Lun - Jeu : 9h-12h, 13h30-18h</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Cabinet Dentaire Charlot. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;