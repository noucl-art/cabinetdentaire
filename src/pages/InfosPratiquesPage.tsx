

const InfosPratiquesPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Informations Pratiques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toutes les informations utiles pour votre visite au cabinet dentaire
          </p>
        </div>

        {/* Contact Principal */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Contact & Rendez-vous</h2>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-6xl mb-4">📅</span>
              <a 
                href="https://www.doctolib.fr/dentiste/change/olivia-charlot" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-bold hover:text-blue-200 transition-colors"
              >
                Doctolib
              </a>
              <p className="text-xl opacity-90">
                Prise de rendez-vous en ligne
              </p>
              <div className="bg-white/20 p-4 rounded-lg mt-6">
                <p className="text-lg">
                  <strong>Urgences :</strong> Délai 48h<br />
                  <strong>Consultations :</strong> Délai 1 semaine
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Horaires */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <span className="text-5xl text-blue-600 mr-4">⏰</span>
                <h2 className="text-3xl font-bold text-gray-900">Horaires d'Ouverture</h2>
              </div>
              <div className="space-y-4">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Dr Charlot Véronique</h4>
                  <div className="text-gray-700 bg-gray-50 p-3 rounded">
                    Lundi - Jeudi : 9h - 12h, 14h - 18h30
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Dr Charlot Olivia</h4>
                  <div className="text-gray-700 bg-blue-50 p-3 rounded">
                    Lundi - Jeudi : 9h - 12h, 13h30 - 18h
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <span className="text-5xl text-green-600 mr-4">📅</span>
                <h2 className="text-3xl font-bold text-gray-900">Comment Prendre RDV</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rendez-vous en ligne</h3>
                    <p className="text-gray-600">Via Doctolib pour l'orthodontie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Précisez vos besoins</h3>
                    <p className="text-gray-600">Consultation, urgence, orthodontie, etc.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Confirmez votre créneau</h3>
                    <p className="text-gray-600">Nous vous proposons les créneaux disponibles</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Merci de nous prévenir 24h à l'avance 
                  en cas d'annulation pour permettre à d\'autres patients d'en bénéficier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Localisation */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nous Trouver</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <span className="text-6xl text-red-600 mb-4 block">📍</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600">Cabinet Dentaire Charlot</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg inline-block">
                  <div className="text-lg text-gray-900 font-semibold">
                    10 Rue de l'Épau
                  </div>
                  <div className="text-lg text-gray-700 mt-1">
                    72560 Changé
                  </div>
                  <div className="text-base text-gray-600 mt-1">
                    Sarthe, France
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Accès</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    🚗
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">En voiture</h4>
                    <p className="text-gray-600">
                      Depuis Le Mans : 15 minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    🚌
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transport en commun</h4>
                    <p className="text-gray-600">Lignes de bus locales disponibles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    P
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stationnement</h4>
                    <p className="text-gray-600">
                      Parking gratuit disponible<br />
                      <span className="text-sm text-gray-500">Places facilement accessibles</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carte OpenStreetMap */}
          <div className="mt-8 bg-white p-4 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Plan d'accès</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=0.2752%2C47.9827%2C0.2852%2C47.9927&layer=mapnik&marker=47.987794%2C0.280256"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plan d'accès au cabinet - Changé (72560)"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                <strong>Cabinet Dentaire Dr Charlot</strong><br />
                10 Rue de l'Épau, 72560 Changé
              </p>
            </div>
          </div>
        </section>

        {/* Moyens de Paiement */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <span className="text-6xl text-green-600 mx-auto mb-4 block">💳</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Moyens de Paiement</h2>
              <p className="text-xl text-gray-600">Nous acceptons plusieurs modes de règlement</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-green-600">€</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Espèces</h3>
                <p className="text-gray-600">Paiement en liquide accepté</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-blue-600">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cartes Bancaires</h3>
                <p className="text-gray-600">Visa, Mastercard, American Express</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-purple-600">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chèques</h3>
                <p className="text-gray-600">Chèques bancaires acceptés</p>
              </div>
            </div>


          </div>
        </section>

        {/* Informations Complémentaires */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Informations Complémentaires</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Première Visite</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1 flex-shrink-0">✅</span>
                  <p className="text-gray-700">Apportez votre carte Vitale et mutuelle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1 flex-shrink-0">✅</span>
                  <p className="text-gray-700">Radiographies récentes si disponibles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1 flex-shrink-0">✅</span>
                  <p className="text-gray-700">Liste de vos médicaments actuels</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1 flex-shrink-0">✅</span>
                  <p className="text-gray-700">Arrivez 10 minutes avant votre RDV</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Urgences Dentaires</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  En cas d'urgence dentaire, contactez le : 
                </p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-800 font-semibold text-center">
                    📞 15
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong> Quand appeler :</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Douleurs dentaires intenses</li>
                    <li>Traumatismes dentaires</li>
                    <li>Infections et abcès</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfosPratiquesPage;