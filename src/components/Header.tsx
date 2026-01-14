import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/adhel-logo.png';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type NavItem =
    | { id: string; label: string; type: 'section'; sectionId: string }
    | { id: string; label: string; type: 'page'; to: string; matchPaths?: string[] };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Accueil', type: 'section', sectionId: 'home' },
    { id: 'about', label: 'À Propos', type: 'section', sectionId: 'about' },
    { id: 'events-page', label: 'Événements', type: 'page', to: '/events', matchPaths: ['/events', '/events/upcoming'] },
    { id: 'news-page', label: 'News Lavallée', type: 'page', to: '/news', matchPaths: ['/news', '/on-parle-de-nous'] },
    { id: 'sponsors-page', label: 'Nos Sponsors', type: 'page', to: '/sponsors', matchPaths: ['/sponsors', '/nos-sponsors'] },
    { id: 'members-page', label: "Membres", type: 'page', to: '/members', matchPaths: ['/members', '/membres'] },
    { id: 'projects', label: 'Nos Projets', type: 'section', sectionId: 'projects' },
    { id: 'contact', label: 'Contact', type: 'section', sectionId: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const handleSectionNav = (sectionId: string) => {
    setActiveSection(sectionId);
    if (location.pathname !== '/') {
      navigate(`/?section=${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }
    scrollToSection(sectionId);
  };

  const handlePageNav = (path: string) => {
    setActiveSection('');
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const isHomeRoute = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            type="button"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleSectionNav('home')}
          >
            <img
              src={logo}
              alt="ADHEL"
              className={`h-10 w-10 rounded-lg border border-emerald-100 bg-white/80 p-1 ${
                isScrolled ? '' : 'shadow-lg'
              }`}
            />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              ADHEL
            </span>
          </button>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.type === 'section' ? (
                  <button
                    onClick={() => handleSectionNav(item.sectionId)}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
                    } ${
                      isHomeRoute && activeSection === item.sectionId ? 'text-emerald-600' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    onClick={() => handlePageNav(item.to)}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
                    } ${
                      location.pathname === item.to || item.matchPaths?.includes(location.pathname)
                        ? 'text-emerald-600'
                        : ''
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <Link
              to="/join"
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-white text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              Nous Rejoindre
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/join"
              className="text-sm font-semibold px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
            >
              Rejoindre
            </Link>
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.type === 'section' ? (
                  <button
                    onClick={() => handleSectionNav(item.sectionId)}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isHomeRoute && activeSection === item.sectionId
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    onClick={() => handlePageNav(item.to)}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.to || item.matchPaths?.includes(location.pathname)
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <Link
              to="/join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-50 text-emerald-600"
            >
              Nous Rejoindre
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
