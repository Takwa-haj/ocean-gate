import React from 'react';
import { SystemCard } from '../components/SystemCard';
import { PodcastPlayer } from '../components/PodcastPlayer';
import { InteractiveModel } from '../components/InteractiveModel';
import { systems } from '../data/systems';
import { podcastEpisodes } from '../data/podcasts';
import { modelPoints } from '../data/modelPoints';

export function Home() {
  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Interactive Model Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Modèle Interactif</h2>
          <InteractiveModel 
            points={modelPoints}
            imageUrl="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80"
          />
        </section>

        {/* Systems Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Systèmes Parallèles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system) => (
              <SystemCard
                key={system.id}
                title={system.title}
                humanSystem={system.humanSystem}
                oceanSystem={system.oceanSystem}
                consequences={system.consequences}
                benefits={system.benefits}
                imageUrl={system.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* Podcast Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Podcasts Éducatifs</h2>
          <PodcastPlayer episodes={podcastEpisodes} />
        </section>
      </main>
    </div>
  );
}