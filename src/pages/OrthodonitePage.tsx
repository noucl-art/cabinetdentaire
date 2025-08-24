import React from 'react';

const OrthodonitePage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Orthodontie
              <span className="text-green-600"> Moderne</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Retrouvez un sourire harmonieux grâce à nos traitements orthodontiques 
              personnalisés, adaptés à tous les âges et tous les besoins.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="photos/photopraticien1.jpg" 
                alt="Orthodontie moderne" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="space-y-6 text-left">
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 flex-shrink-0">✅</span><span className="hidden" />
                  <span className="text-lg text-gray-700">Consultation personnalisée</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 flex-shrink-0">✅</span><span className="hidden" />
                  <span className="text-lg text-gray-700">Technologies de pointe</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 flex-shrink-0">✅</span><span className="hidden" />
                  <span className="text-lg text-gray-700">Suivi régulier et attentif</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 flex-shrink-0">✅</span><span className="hidden" />
                  <span className="text-lg text-gray-700">Résultats durables</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types de Traitements */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Traitements Orthodontiques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bagues Métalliques */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bagues Métalliques</h3>
              <p className="text-gray-600 mb-4">
                Solution classique et efficace pour tous types de malpositions. 
                Robustes et économiques, idéales pour les adolescents.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Traitement de tous les cas complexes</li>
                <li>• Durée : 18 à 36 mois</li>
                <li>• Excellent rapport qualité-prix</li>
              </ul>
            </div>

            {/* Bagues Céramiques */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bagues Céramiques</h3>
              <p className="text-gray-600 mb-4">
                Alternative esthétique aux bagues métalliques. Discrètes et 
                efficaces, parfaites pour les adultes soucieux de l'esthétique.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Couleur proche de la dent</li>
                <li>• Durée : 18 à 36 mois</li>
                <li>• Confort et discrétion</li>
              </ul>
            </div>

            {/* Invisalign */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border-2 border-green-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aligneurs Invisalign</h3>
              <div className="bg-green-50 px-3 py-1 rounded-full text-sm text-green-700 font-semibold mb-4 inline-block">
                Recommandé
              </div>
              <p className="text-gray-600 mb-4">
                Gouttières transparentes amovibles. Solution invisible et 
                confortable pour corriger les malpositions dentaires.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Totalement invisible</li>
                <li>• Amovible pour manger</li>
                <li>• Durée : 12 à 24 mois</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processus de Traitement */}
        <section className="mb-20 bg-gradient-to-r from-green-50 to-blue-50 p-12 rounded-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Votre Parcours Orthodontique</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">
                Examen complet et analyse de votre sourire pour définir le meilleur traitement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Plan de Traitement</h3>
              <p className="text-gray-600">
                Présentation détaillée du plan personnalisé avec simulation 3D du résultat.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Traitement Actif</h3>
              <p className="text-gray-600">
                Pose de l'appareil et rendez-vous réguliers pour ajustements et suivi.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contention</h3>
              <p className="text-gray-600">
                Phase de stabilisation pour maintenir les résultats obtenus dans le temps.
              </p>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Pourquoi Choisir Notre Orthodontie ?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="photos/photopraticien1.jpg" 
                alt="Dr Charlot Olivia orthodontiste" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl mt-1 flex-shrink-0">🏆</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Expertise Reconnue</h3>
                  <p className="text-gray-600">Dr Charlot Olivia, spécialiste certifiée avec 15+ ans d'expérience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl mt-1 flex-shrink-0">💖</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Approche Personnalisée</h3>
                  <p className="text-gray-600">Chaque traitement est adapté à vos besoins spécifiques et votre mode de vie</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl mt-1 flex-shrink-0">⏰</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Suivi Régulier</h3>
                  <p className="text-gray-600">Rendez-vous programmés et disponibilité pour toute urgence</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl mt-1 flex-shrink-0">🔬</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Technologies Modernes</h3>
                  <p className="text-gray-600">Équipements de dernière génération pour des résultats optimaux</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Questions Fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">À quel âge commencer un traitement ?</h3>
                <p className="text-gray-600">
                  L'orthodontie peut être pratiquée à tout âge. Pour les enfants, 
                  l'âge idéal se situe entre 11 et 14 ans, mais les adultes peuvent 
                  également bénéficier de traitements efficaces.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Combien de temps dure un traitement ?</h3>
                <p className="text-gray-600">
                  La durée varie selon la complexité du cas : 12 à 24 mois pour 
                  Invisalign, 18 à 36 mois pour les bagues traditionnelles.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Les traitements sont-ils douloureux ?</h3>
                <p className="text-gray-600">
                  Les premiers jours peuvent occasionner une gêne légère. 
                  Nous utilisons des techniques douces pour minimiser l'inconfort.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Quelle est la fréquence des rendez-vous ?</h3>
                <p className="text-gray-600">
                  Généralement toutes les 6 à 8 semaines pour les ajustements 
                  et le suivi de l'évolution du traitement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-12 rounded-2xl text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Sourire ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée 
            et découvrez le traitement orthodontique qui vous convient le mieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.doctolib.fr/dentiste/change/olivia-charlot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-12 py-6 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 font-bold text-xl inline-flex items-center justify-center"
            >
              <span className="mr-3">📅</span>
              Prendre Rendez-vous
              <span className="ml-3">→</span>
            </a>
            <a 
              href="tel:0145678900" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 font-semibold text-lg"
            >
              Ou appelez : 01 45 67 89 00
            </a>
          </div>
        </section>

        {/* Bouton RDV très visible en haut */}
        <section className="fixed top-20 right-6 z-40">
          <a 
            href="https://www.doctolib.fr/dentiste/change/olivia-charlot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-200 hover:shadow-xl transform hover:scale-105 font-bold text-lg inline-flex items-center animate-pulse"
          >
            <span className="mr-2">📅</span>
            Prendre RDV
          </a>
        </section>

        {/* Ancien Call to Action transformé */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Sourire ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée 
            et découvrez le traitement orthodontique qui vous convient le mieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.doctolib.fr/dentiste/change/olivia-charlot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-12 py-6 rounded-lg hover:bg-green-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 font-bold text-xl inline-flex items-center justify-center"
            >
              <span className="mr-3">📅</span>
              Prendre Rendez-vous avec Dr Charlot Olivia
              <span className="ml-3">→</span>
            </a>
            <a 
              href="tel:0145678900" 
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 font-semibold text-lg"
            >
              Ou appelez : 01 45 67 89 00
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrthodonitePage;