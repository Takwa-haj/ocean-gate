import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface ModelPoint {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
}

interface InteractiveModelProps {
  points: ModelPoint[];
  imageUrl: string;
}

export function InteractiveModel({ points, imageUrl }: InteractiveModelProps) {
  const [selectedPoint, setSelectedPoint] = React.useState<ModelPoint | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Modèle interactif"
        className="w-full h-full object-cover"
      />
      
      {points.map((point) => (
        <motion.div
          key={point.id}
          className="absolute"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
          whileHover={{ scale: 1.2 }}
        >
          <button
            onClick={() => setSelectedPoint(point)}
            className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
          >
            <Info className="w-4 h-4" />
          </button>
        </motion.div>
      ))}

      {selectedPoint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4"
        >
          <h3 className="font-bold text-lg mb-2">{selectedPoint.title}</h3>
          <p className="text-gray-700">{selectedPoint.description}</p>
          <button
            onClick={() => setSelectedPoint(null)}
            className="mt-2 text-blue-600 hover:text-blue-800"
          >
            Fermer
          </button>
        </motion.div>
      )}
    </div>
  );
}