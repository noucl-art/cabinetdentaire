import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Award, Star, GraduationCap, Heart, Shield, ArrowRight } from 'lucide-react';

const CharlotOliviaPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="photos/photopraticien1.jpg" 
              alt="Dr Charlot Olivia" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr Charlot Olivia</h1>
              <p className="text-2xl text-green-600 font-semibold">Chirurgien-Dentiste Omnipraticienne + Orthodontie</p>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dentiste passionnée spécialisée en orthodontie et dentisterie générale. 
              Formation continue en techniques orthodontiques modernes pour vous offrir 
              les meilleurs soins dans un environnement bienveillant.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold text-gray-900">15+ ans d'expérience</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold text-gray-900">Spécialiste orthodontie</span>
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
                  <GraduationCap className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Doctorat en Chirurgie Dentaire</h3>
                    <p className="text-gray-600">Université Paris Descartes - Faculté de Chirurgie Dentaire</p>
                    <p className="text-sm text-gray-500">2008</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Diplôme Universitaire d'Orthodontie</h3>
                    <p className="text-gray-600">Université Paris VII - Denis Diderot</p>
                    <p className="text-sm text-gray-500">2011</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certification Invisalign</h3>
                    <p className="text-gray-600">Formation spécialisée en aligneurs transparents</p>
                    <p className="text-sm text-gray-500">2015</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Formation en Orthodontie Linguale</h3>
                    <p className="text-gray-600">Techniques orthodontiques invisibles</p>
                    <p className="text-sm text-gray-500">2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Double Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Double Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Omnipratique */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Smile className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Dentisterie Générale</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Soins conservateurs et préventifs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Détartrage et prophylaxie
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Obturations esthétiques
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Couronnes et bridges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Extractions simples
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Soins d'urgence
                </li>
              </ul>
            </div>

            {/* Orthodontie */}
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Orthodontie</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Bagues métalliques et céramiques
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Aligneurs transparents (Invisalign)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Orthodontie linguale invisible
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Orthodontie interceptive enfants
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Orthodontie adulte
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Contention et suivi post-traitement
                </li>
              </ul>
              <Link 
                to="/orthodontie"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                Découvrir nos traitements orthodontiques <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Approche Personnalisée */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mon Approche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Écoute Active</h3>
              <p className="text-gray-600">
                Je prends le temps d'écouter vos préoccupations et d'expliquer 
                chaque étape du traitement pour vous rassurer.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence Technique</h3>
              <p className="text-gray-600">
                Formation continue et utilisation des technologies les plus 
                avancées pour des résultats optimaux.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Confort Patient</h3>
              <p className="text-gray-600">
                Environnement apaisant et techniques douces pour minimiser 
                l'inconfort et l'anxiété.
              </p>
            </div>
          </div>
        </section>

        {/* Témoignage */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ma Vision</h2>
            <blockquote className="text-2xl italic text-gray-700 leading-relaxed max-w-4xl mx-auto">
              "Mon objectif est de vous accompagner vers un sourire harmonieux et une santé 
              bucco-dentaire optimale. Que ce soit pour des soins de routine ou un traitement 
              orthodontique complet, je m'engage à vous offrir des soins de qualité dans un 
              environnement bienveillant et moderne."
            </blockquote>
            <p className="text-xl text-gray-600 mt-6">- Dr Charlot Olivia</p>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prendre Rendez-vous</h2>
          <p className="text-xl text-gray-600 mb-8">
            Pour une consultation avec le Dr Charlot Olivia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0145678900" 
              className="bg-green-600 text-white px-12 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 font-semibold text-xl"
            >
              01 45 67 89 00
            </a>
            <Link 
              to="/orthodontie"
              className="border-2 border-green-600 text-green-600 px-12 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 font-semibold text-xl"
            >
              Orthodontie
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CharlotOliviaPage;