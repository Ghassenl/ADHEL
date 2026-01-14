import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, History } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/events';
import BackToHomeButton from '../components/BackToHomeButton';

function EventsOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHomeButton className="text-left" />
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Événements ADHEL</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez l’ensemble des rendez-vous qui font vivre l’écoquartier Lavallée : activités sportives,
            actions solidaires et temps forts festifs.
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">À venir</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <article
                key={event.slug}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-emerald-300 transition-all p-8 flex flex-col"
              >
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${event.imageGradient} mb-6`}></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-emerald-600" />
                    <span>{event.attendees} participants attendus</span>
                  </div>
                </div>
                <Link
                  to={`/events/${event.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  Découvrir l’événement
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <History className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Événements précédents</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <article
                key={event.slug}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-300 transition-all p-6 shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {event.slug ? (
                    <Link to={`/events/${event.slug}`} className="hover:text-emerald-600 transition-colors">
                      {event.title}
                    </Link>
                  ) : (
                    event.title
                  )}
                </h3>
                <p className="text-sm text-emerald-600 font-medium mb-3">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default EventsOverviewPage;

