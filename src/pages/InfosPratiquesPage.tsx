import React from 'react';
import { Phone, MapPin, Clock, CreditCard, Calendar, Navigation, Euro, CheckCircle } from 'lucide-react';

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
              <Phone className="h-16 w-16 mb-4" />
              <a 
                href="tel:0145678900" 
                className="text-4xl font-bold hover:text-blue-200 transition-colors"
              >
                01 45 67 89 00
              </a>
              <p className="text-xl opacity-90">
                Prise de rendez-vous uniquement par téléphone
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
                <Clock className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Horaires d'Ouverture</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Lundi</span>
                  <span className="text-gray-700">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Mardi</span>
                  <span className="text-gray-700">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Mercredi</span>
                  <span className="text-gray-700">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Jeudi</span>
                  <span className="text-gray-700">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Vendredi</span>
                  <span className="text-gray-700">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Samedi</span>
                  <span className="text-gray-700">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Dimanche</span>
                  <span className="text-red-600 font-semibold">Fermé</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Calendar className="h-12 w-12 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Comment Prendre RDV</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Appelez le cabinet</h3>
                    <p className="text-gray-600">01 45 67 89 00 aux heures d'ouverture</p>
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
              <div className="flex items-center mb-6">
                <MapPin className="h-12 w-12 text-red-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">Cabinet Dentaire Charlot</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-lg text-gray-700">
                  <strong>42 Avenue Victor Hugo</strong><br />
                  75016 Paris<br />
                  France
                </div>
                <div className="flex items-center space-x-2">
                  <Navigation className="h-5 w-5 text-blue-600" />
                  <a 
                    href="https://maps.google.com/?q=42+Avenue+Victor+Hugo+75016+Paris" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transports</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Métro</h4>
                    <p className="text-gray-600">
                      <strong>Victor Hugo</strong> (Ligne 2)<br />
                      <strong>Charles de Gaulle-Étoile</strong> (Lignes 1, 2, 6, RER A)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    B
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bus</h4>
                    <p className="text-gray-600">Lignes 22, 30, 52, 82</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    P
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parking</h4>
                    <p className="text-gray-600">
                      Parking Victor Hugo<br />
                      <span className="text-sm text-gray-500">Places payantes dans la rue</span>
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
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.2850%2C48.8700%2C2.2950%2C48.8750&layer=mapnik&marker=48.8725%2C2.2900"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plan d'accès au cabinet"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Moyens de Paiement */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <CreditCard className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Moyens de Paiement</h2>
              <p className="text-xl text-gray-600">Nous acceptons plusieurs modes de règlement</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Espèces</h3>
                <p className="text-gray-600">Paiement en liquide accepté</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cartes Bancaires</h3>
                <p className="text-gray-600">Visa, Mastercard, American Express</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chèques</h3>
                <p className="text-gray-600">Chèques bancaires acceptés</p>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Tiers Payant</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mutuelles Conventionnées</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Harmonie Mutuelle</li>
                    <li>• MGEN</li>
                    <li>• Mutuelle Générale</li>
                    <li>• MAIF</li>
                    <li>• Et autres mutuelles partenaires</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prise en Charge</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Sécurité Sociale</li>
                    <li>• CMU-C / CSS</li>
                    <li>• ALD (Affection Longue Durée)</li>
                    <li>• Devis gratuit sur demande</li>
                  </ul>
                </div>
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
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Apportez votre carte Vitale et mutuelle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Radiographies récentes si disponibles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Liste de vos médicaments actuels</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
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
                  <p><strong>Urgences acceptées :</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Douleurs dentaires intenses</li>
                    <li>Traumatismes dentaires</li>
                    <li>Infections et abcès</li>
                    <li>Prothèses cassées</li>
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