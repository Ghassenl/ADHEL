import { ExternalLink, HeartHandshake, Sparkles } from 'lucide-react';
import { sponsors } from '../data/sponsors';
import BackToHomeButton from '../components/BackToHomeButton';

function SponsorsPage() {
  const principalSponsors = sponsors.filter((sponsor) => sponsor.tier === 'principal');
  const supportSponsors = sponsors.filter((sponsor) => sponsor.tier === 'support');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHomeButton className="text-left" />
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HeartHandshake className="h-4 w-4" />
            Partenaires engagés
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Nos Sponsors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Merci aux partenaires qui accompagnent l’ADHEL et permettent de faire rayonner nos initiatives solidaires,
            sportives et festives dans l’écoquartier Lavallée.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Partenaires majeurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principalSponsors.map((sponsor) => (
              <article
                key={sponsor.name}
                className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 hover:border-emerald-300 transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{sponsor.name}</h3>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-4">
                  {sponsor.focus}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">{sponsor.description}</p>
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Visiter le site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Soutiens du quotidien</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {supportSponsors.map((sponsor) => (
              <article
                key={sponsor.name}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-emerald-200 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{sponsor.name}</h3>
                <p className="text-sm text-emerald-600 font-medium uppercase tracking-wide mb-3">{sponsor.focus}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{sponsor.description}</p>
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
                  >
                    Découvrir
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SponsorsPage;

