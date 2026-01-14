import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Share2, Heart, ChevronLeft, Zap, Target } from 'lucide-react';
import { eventsBySlug, EventDetail } from '../data/events';

function EventDetailPage() {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [shareStatus, setShareStatus] = useState<'idle' | 'shared' | 'copied' | 'error'>('idle');

  const event: EventDetail | undefined = eventSlug ? eventsBySlug[eventSlug] : undefined;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Événement non trouvé</h1>
          <p className="text-gray-600 mb-8">Cet événement n'existe pas ou a été supprimé.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/events/${event.slug}`
      : `/events/${event.slug}`;

  const handleShare = async () => {
    const shareData = {
      title: event.title,
      text: event.description,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus('shared');
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus('copied');
      } else {

        const tempInput = document.createElement('input');
        tempInput.value = shareUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        setShareStatus('copied');
      }
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') {
        setShareStatus('error');
      }
    } finally {
      setTimeout(() => setShareStatus('idle'), 4000);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-gray-50 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 mt-3 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          Retour aux événements
        </button>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className={`mb-8 animate-slide-up ${isLoaded ? '' : 'opacity-0'}`}>
              <div className={`bg-gradient-to-br ${event.imageGradient} h-64 md:h-80 rounded-3xl shadow-2xl flex items-center justify-center mb-8`}>
                <div className="text-white text-center">
                  <h1 className="text-5xl md:text-6xl font-bold mb-2">{event.title}</h1>
                  <p className="text-xl opacity-90">Découvrez tous les détails</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {event.fullDescription}
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                    Informations Pratiques
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Calendar className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Date</p>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Lieu</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Users className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Participants attendus</p>
                        <p className="text-gray-600">{event.attendees}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`md:col-span-1 animate-slide-up-delay ${isLoaded ? '' : 'opacity-0'}`}>
            <div className="sticky top-20 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block bg-gradient-to-r ${event.imageGradient} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {event.type}
                  </span>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 rounded-full transition-all transform hover:scale-110 ${isFavorite
                        ? 'bg-rose-100 text-rose-600'
                        : 'bg-gray-100 text-gray-400 hover:text-gray-600'
                      }`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">{event.title}</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <Link
                  to="/join"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 mb-3"
                >
                  <Zap className="h-5 w-5" />
                  Je veux participer
                </Link>

                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  <Share2 className="h-5 w-5" />
                  Partager
                </button>
                <div className="min-h-[1.5rem] text-sm text-center text-emerald-600 pt-2" aria-live="polite">
                  {shareStatus === 'shared' && 'Lien partagé avec succès !'}
                  {shareStatus === 'copied' && 'Lien copié dans le presse-papiers.'}
                  {shareStatus === 'error' && "Impossible de partager le lien. Réessayez plus tard."}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className={`animate-slide-up ${isLoaded ? '' : 'opacity-0'}`} style={isLoaded ? { animationDelay: '0.2s' } : {}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-emerald-600" />
              Déroulement de la journée
            </h3>
            <div className="space-y-4">
              {event.schedule.map((item, idx) => (
                <div key={idx} className="flex gap-4 bg-white rounded-lg p-4 border border-gray-100 hover:border-emerald-300 transition-all">
                  <div className="text-emerald-600 font-bold text-lg flex-shrink-0">{item.time}</div>
                  <div className="text-gray-700">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-12 animate-slide-up ${isLoaded ? '' : 'opacity-0'}`} style={isLoaded ? { animationDelay: '0.3s' } : {}}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-emerald-600" />
                Activités
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {event.activities.map((activity, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100 text-center hover:border-emerald-300 transition-all">
                    <p className="font-semibold text-emerald-700">{activity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-emerald-600" />
                Bénéfices
              </h3>
              <ul className="space-y-3">
                {event.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center animate-scale-in ${isLoaded ? '' : 'opacity-0'}`} style={isLoaded ? { animationDelay: '0.4s' } : {}}>
          <h3 className="text-2xl font-bold mb-4">Besoin d'aide ou de plus d'informations ?</h3>
          <p className="mb-6 text-emerald-50">
            N'hésitez pas à nous contacter pour toute question concernant cet événement.
          </p>
          <a
            href={`mailto:${event.contactEmail}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105"
          >
            Nous Contacter
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
