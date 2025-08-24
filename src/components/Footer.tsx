import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Cabinet Charlot</span>
            </div>
            <p className="text-gray-400">
              Cabinet dentaire moderne à Paris 16ème, spécialisé en dentisterie générale et orthodontie.
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
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                02 43 84 62 74
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                10 Rue de L'Epau 72560 Changé
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horaires</h4>
            <div className="text-gray-400 space-y-1">
              <p>Lun - Ven : 9h - 18h</p>
              <p>Samedi : 9h - 13h</p>
              <p>Dimanche : Fermé</p>
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