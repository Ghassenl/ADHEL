import { Calendar, Users, Heart, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 pt-32 pb-20 overflow-hidden min-h-screen flex items-center scroll-mt-24"
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-overlay filter blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-overlay filter blur-3xl animate-float-delay-2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-50 to-white">
                ADHEL
              </span>
            </h1>
          </div>

          <div className={`${isLoaded ? 'animate-slide-up-delay' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl text-emerald-50 mb-4 font-light">
              Association Des Habitants de l'Écoquartier Lavallée
            </p>
          </div>

          <div className={`${isLoaded ? 'animate-slide-up-delay-2' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Créons ensemble une communauté vivante et solidaire au cœur de notre quartier
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`} style={isLoaded ? { animationDelay: '0.4s' } : {}}>
            <button
              onClick={() => navigate('/join')}
              className="group relative bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all transform hover:scale-110 shadow-2xl hover:shadow-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Nous Rejoindre</span>
            </button>
            <button
              onClick={() => {
                const eventsSection = document.getElementById('events');
                if (eventsSection) {
                  const offset = 80;
                  const elementPosition = eventsSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all transform hover:scale-110"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative">Découvrir nos Événements</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { Icon: Calendar, title: "Événements Réguliers", desc: "Des activités conviviales toute l'année", delay: 0 },
              { Icon: Users, title: "Communauté Active", desc: "Une association créée par et pour les habitants", delay: 1 },
              { Icon: Heart, title: "Esprit de Partage", desc: "Tisser des liens entre voisins et générations", delay: 2 }
            ].map(({ Icon, title, desc, delay }, idx) => (
              <div
                key={idx}
                className={`group bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={isLoaded ? { animationDelay: `${0.5 + delay * 0.15}s` } : {}}
              >
                <div className="transform group-hover:scale-110 transition-transform">
                  <Icon className="h-10 w-10 text-white mx-auto mb-3 group-hover:text-emerald-100" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-emerald-50 transition-colors">{title}</h3>
                <p className="text-emerald-50 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="animate-bounce-gentle">
              <ChevronDown className="h-8 w-8 text-white opacity-70" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
