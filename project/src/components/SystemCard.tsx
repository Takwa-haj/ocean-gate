import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SystemCardProps {
  title: string;
  humanSystem: string;
  oceanSystem: string;
  consequences: string;
  benefits: string;
  imageUrl: string;
}

export function SystemCard({
  title,
  humanSystem,
  oceanSystem,
  consequences,
  benefits,
  imageUrl,
}: SystemCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600">Système Humain</h4>
            <p className="text-gray-600">{humanSystem}</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600">Système Océanique</h4>
            <p className="text-gray-600">{oceanSystem}</p>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Voir moins
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                En savoir plus
              </>
            )}
          </button>

          {isExpanded && (
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold text-green-600">Bénéfices</h4>
                <p className="text-gray-600">{benefits}</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-600">Conséquences</h4>
                <p className="text-gray-600">{consequences}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}