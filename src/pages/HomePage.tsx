import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Heart, Shield, Award, Users, Building2, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Cabinet Dentaire
                <span className="text-blue-600"> Charlot</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Votre sourire, notre priorité. Cabinet dentaire moderne proposant des soins 
                de dentisterie générale et d'orthodontie dans un environnement chaleureux et professionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/orthodontie"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 font-semibold text-center"
                >
                  Orthodontie
                </Link>
                <Link 
                  to="/infos-pratiques"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold text-center"
                >
                  Infos Pratiques
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Cabinet dentaire moderne" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">25+ ans</p>
                    <p className="text-sm text-gray-600">d'expérience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deux praticiennes expérimentées à votre service pour tous vos besoins dentaires
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Dr Charlot Véronique" 
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dr Charlot Véronique</h3>
                  <p className="text-blue-600 font-semibold">Omnipraticienne</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Spécialisée en dentisterie générale avec plus de 25 ans d'expérience. 
                Expertise en soins conservateurs, prothèses et chirurgie dentaire.
              </p>
              <Link 
                to="/dr-charlot-veronique"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Dr Charlot Olivia" 
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dr Charlot Olivia</h3>
                  <p className="text-green-600 font-semibold">Omnipraticienne + Orthodontie</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Dentiste passionnée spécialisée en orthodontie et dentisterie générale. 
                Formation continue en techniques orthodontiques modernes.
              </p>
              <Link 
                to="/dr-charlot-olivia"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Cabinet */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Cabinet</h2>
              <p className="text-xl text-gray-600 mb-8">
                Un environnement moderne et chaleureux situé au cœur du 16ème arrondissement de Paris.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Building2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Équipements Modernes</h3>
                    <p className="text-gray-600">Technologies de pointe pour des soins optimaux et confortables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hygiène Irréprochable</h3>
                    <p className="text-gray-600">Protocoles de stérilisation stricts selon les normes européennes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Accueil Personnalisé</h3>
                    <p className="text-gray-600">Prise en charge bienveillante dans un cadre apaisant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Salle d'attente" 
                className="rounded-lg shadow-lg h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Salle de soins" 
                className="rounded-lg shadow-lg h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Actes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Actes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de soins dentaires et orthodontiques pour toute la famille
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <Smile className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Chirurgie Dentaire</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Soins conservateurs (caries, détartrage)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Prothèses dentaires (couronnes, bridges)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Extractions et chirurgie orale
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Endodontie (traitement des racines)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Parodontologie (soins des gencives)
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Orthodontie</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Bagues métalliques traditionnelles
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Bagues céramiques esthétiques
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Aligneurs transparents (Invisalign)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Orthodontie interceptive (enfants)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Orthodontie adulte
                </li>
              </ul>
              <Link 
                to="/orthodontie"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                En savoir plus sur l'orthodontie <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;