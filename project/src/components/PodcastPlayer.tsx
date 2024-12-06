import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Play, Pause, Volume2 } from 'lucide-react';

interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
}

interface PodcastPlayerProps {
  episodes: PodcastEpisode[];
}

export function PodcastPlayer({ episodes }: PodcastPlayerProps) {
  const [currentEpisode, setCurrentEpisode] = React.useState<PodcastEpisode | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = (episode: PodcastEpisode) => {
    if (currentEpisode?.id === episode.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentEpisode(episode);
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Nos Podcasts</h2>
      <div className="space-y-4">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{episode.title}</h3>
                <p className="text-gray-600 text-sm">{episode.description}</p>
                <span className="text-gray-500 text-xs">{episode.duration}</span>
              </div>
              <button
                onClick={() => togglePlay(episode)}
                className="ml-4 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                {currentEpisode?.id === episode.id && isPlaying ? (
                  <Pause className="w-6 h-6 text-blue-600" />
                ) : (
                  <Play className="w-6 h-6 text-blue-600" />
                )}
              </button>
            </div>
            {currentEpisode?.id === episode.id && (
              <div className="mt-4">
                <ReactAudioPlayer
                  src={episode.audioUrl}
                  autoPlay={isPlaying}
                  controls
                  className="w-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}