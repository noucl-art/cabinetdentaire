import React from 'react';

const CharlotVeroniquePage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="photos/photopraticien1.jpg" 
              alt="Dr Charlot Véronique" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr Charlot Véronique</h1>
              <p className="text-2xl text-green-600 font-semibold">Chirurgien-Dentiste Omnipraticienne</p>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Forte de plus de 25 ans d'expérience en dentisterie générale, le Dr Charlot Véronique 
              vous accompagne avec expertise et bienveillance dans tous vos soins dentaires.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">🏆</span><span className="hidden" />
                <span className="font-semibold text-gray-900">25+ ans d'expérience</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">⭐</span><span className="hidden" />
                <span className="font-semibold text-gray-900">Expertise reconnue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formation et Diplômes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Formation et Diplômes</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-600 mt-1 flex-shrink-0">🎓</span><span className="hidden" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Doctorat en Chirurgie Dentaire</h3>
                    <p className="text-gray-600">Université Paris Descartes - Faculté de Chirurgie Dentaire</p>
                    <p className="text-sm text-gray-500">1998</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-600 mt-1 flex-shrink-0">🏆</span><span className="hidden" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Diplôme Universitaire en Parodontologie</h3>
                    <p className="text-gray-600">Université Paris VII - Denis Diderot</p>
                    <p className="text-sm text-gray-500">2001</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-purple-600 mt-1 flex-shrink-0">⭐</span><span className="hidden" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Formation en Implantologie</h3>
                    <p className="text-gray-600">Institut de Formation Continue</p>
                    <p className="text-sm text-gray-500">2005</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-red-500 mt-1 flex-shrink-0">❤️</span><span className="hidden" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certification en Sédation Consciente</h3>
                    <p className="text-gray-600">Formation spécialisée pour patients anxieux</p>
                    <p className="text-sm text-gray-500">2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spécialités */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Domaines d'Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl text-green-600">🦷</span><span className="hidden" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dentisterie Conservatrice</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Traitement des caries</li>
                <li>• Obturations esthétiques</li>
                <li>• Inlays/Onlays céramiques</li>
                <li>• Facettes dentaires</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl text-green-600">🛡️</span><span className="hidden" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Parodontologie</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Traitement des gingivites</li>
                <li>• Soins parodontaux</li>
                <li>• Détartrage et surfaçage</li>
                <li>• Chirurgie parodontale</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl text-purple-600">🏆</span><span className="hidden" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prothèses Dentaires</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Couronnes céramiques</li>
                <li>• Bridges</li>
                <li>• Prothèses amovibles</li>
                <li>• Implants dentaires</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophie de Soins */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ma Philosophie de Soins</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <blockquote className="text-xl italic text-gray-700 leading-relaxed">
                "Chaque patient est unique et mérite une approche personnalisée. Mon objectif est de 
                préserver votre santé bucco-dentaire tout en respectant vos attentes esthétiques."
              </blockquote>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-red-500 mt-1 flex-shrink-0">❤️</span><span className="hidden" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Écoute et Bienveillance</h3>
                    <p className="text-gray-600">Prise en compte de vos préoccupations et de vos craintes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-blue-500 mt-1 flex-shrink-0">🛡️</span><span className="hidden" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Prévention Avant Tout</h3>
                    <p className="text-gray-600">Conseils personnalisés pour maintenir une hygiène optimale</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-yellow-500 mt-1 flex-shrink-0">⭐</span><span className="hidden" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Excellence Technique</h3>
                    <p className="text-gray-600">Formation continue et utilisation des dernières technologies</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="photos/photopraticien1.jpg" 
                alt="Cabinet dentaire" 
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prendre Rendez-vous</h2>
          <p className="text-xl text-gray-600 mb-8">
            Pour une consultation avec le Dr Charlot Véronique
          </p>
          <a 
            href="tel:0145678900" 
            className="bg-green-600 text-white px-12 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 font-semibold text-xl inline-block"
          >
            01 45 67 89 00
          </a>
        </section>
      </div>
    </div>
  );
};

export default CharlotVeroniquePage;