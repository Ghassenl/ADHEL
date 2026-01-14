import { Calendar, MapPin, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { upcomingEvents, pastEvents } from '../data/events';

function Events() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('events');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Nos Événements
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up-delay' : 'opacity-0'}`}>
            Découvrez nos activités et rendez-vous qui animent la vie du quartier tout au long de l'année
          </p>
        </div>

        <div className="mb-16">
          <h3 className={`text-3xl font-bold text-gray-900 mb-8 flex items-center ${isVisible ? 'animate-slide-up-delay' : 'opacity-0'}`}>
            <Calendar className="h-8 w-8 text-emerald-600 mr-3" />
            Événements à Venir
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100 hover:border-emerald-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={isVisible ? { animationDelay: `${0.1 + index * 0.1}s` } : {}}
              >
                <div className={`h-2 bg-gradient-to-r ${event.imageGradient} transition-all`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-emerald-200 transition-colors">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{event.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="text-sm">{event.attendees} participants attendus</span>
                    </div>
                  </div>

                  <Link
                    to={`/events/${event.slug}`}
                    className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform group-hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    En savoir plus
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.3s' } : {}}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 text-emerald-600 mr-3" />
            Événements Passés
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <div key={event.slug ?? index} className="group border-l-4 border-emerald-500 pl-6 py-2 hover:pl-8 hover:border-emerald-600 transition-all cursor-pointer">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {event.slug ? (
                    <Link to={`/events/${event.slug}`} className="hover:text-emerald-600 transition-colors">
                      {event.title}
                    </Link>
                  ) : (
                    event.title
                  )}
                </h4>
                <p className="text-sm text-emerald-600 font-medium mb-2">{event.date}</p>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
