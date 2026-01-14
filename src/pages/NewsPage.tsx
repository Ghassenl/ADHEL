import { Link } from 'react-router-dom';
import { Newspaper, Megaphone, ExternalLink } from 'lucide-react';
import { newsItems } from '../data/news';
import BackToHomeButton from '../components/BackToHomeButton';

function NewsPage() {
  const associationNews = newsItems.filter((item) => item.category === 'news');
  const pressNews = newsItems.filter((item) => item.category === 'press');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHomeButton className="text-left" />
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Newspaper className="h-4 w-4" />
            News Lavallée
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Actualités & Presse</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez les moments forts de l’ADHEL, les retombées médiatiques et ce que disent nos partenaires de la vie
            du quartier.
          </p>
        </header>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Les dernières nouvelles de l’association</h2>
          </div>
          <div className="space-y-6">
            {associationNews.map((item) => (
              <article
                key={item.slug}
                className="bg-white rounded-2xl shadow border border-gray-100 hover:border-emerald-200 transition-all p-6"
              >
                <p className="text-sm text-emerald-600 font-medium mb-2">{item.date}</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  <Link to={`/news/${item.slug}`} className="hover:text-emerald-600 transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">On parle de nous</h2>
          </div>
          <div className="space-y-6">
            {pressNews.map((item) => (
              <article
                key={item.slug ?? item.title}
                className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all p-6 shadow-sm"
              >
                <p className="text-sm text-emerald-600 font-medium mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
                  >
                    Lire l’article
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

export default NewsPage;

