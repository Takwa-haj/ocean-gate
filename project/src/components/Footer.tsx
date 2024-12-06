import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Restez Informé</h3>
            {subscribed ? (
              <div className="flex items-center text-green-400">
                <Heart className="w-5 h-5 mr-2" />
                Merci de votre inscription!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-700 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition-colors duration-200"
                >
                  S'abonner
                </button>
              </form>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'systems', label: 'Systèmes' },
                { id: 'about', label: 'À Propos' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-blue-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Corps Humain et Océan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}