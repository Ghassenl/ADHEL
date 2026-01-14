import { Mail, MessageSquare, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/adhel-logo.png';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="ADHEL"
                className="h-10 w-10 rounded-lg border border-emerald-200 bg-white p-1 shadow"
              />
              <span className="text-2xl font-bold">ADHEL</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Association Des Habitants de l'Écoquartier Lavallée.
              Ensemble, créons une communauté vivante et solidaire.
            </p>
            <p className="text-sm text-gray-500">
              Fondée en octobre 2025
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Événements à venir
                </Link>
              </li>
              <li>
                <Link to="/events/sport-partage" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Sport &amp; Partage
                </Link>
              </li>
              <li>
                <Link to="/events/operation-nounours" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Opération Nounours
                </Link>
              </li>
              <li>
                <Link to="/events/halloween-2025" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Halloween 2025
                </Link>
              </li>
              <li>
                <Link to="/events/dejeuner-blanc-2025" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Déjeuner Blanc 2025
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Nos Sponsors
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  News Lavallée
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Membres de l'association
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:contact.adhel@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  contact.adhel@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <a href="https://wa.me/33664306362" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  +33 6 64 30 63 62
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-emerald-400" />
                <a href="https://www.instagram.com/adhel_association_lavallee/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  @adhel_association_lavallee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ADHEL. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
