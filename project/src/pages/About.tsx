import React from 'react';
import { Users, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">À Propos de Notre Mission</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-700">Notre Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Notre projet vise à sensibiliser le public aux liens profonds qui existent entre le corps humain
            et les océans. En comprenant ces parallèles, nous pouvons mieux apprécier l'importance de
            préserver nos océans pour la santé de notre planète.
          </p>
          
          <div className="flex items-start space-x-4">
            <Globe className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Impact Global</h3>
              <p className="text-gray-600">
                Nos actions locales ont des répercussions globales sur la santé des océans.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Notre Équipe</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Users className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Experts Passionnés</h3>
                <p className="text-gray-600">
                  Une équipe multidisciplinaire de biologistes marins et d'éducateurs.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Engagement</h3>
                <p className="text-gray-600">
                  Dévoués à la protection des océans et à l'éducation environnementale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Nos Objectifs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Éducation",
              description: "Sensibiliser le public aux liens entre santé humaine et océanique"
            },
            {
              title: "Innovation",
              description: "Développer des outils pédagogiques interactifs et engageants"
            },
            {
              title: "Action",
              description: "Encourager des actions concrètes pour la protection des océans"
            }
          ].map((objective) => (
            <div key={objective.title} className="p-4 border border-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-2">{objective.title}</h3>
              <p className="text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}