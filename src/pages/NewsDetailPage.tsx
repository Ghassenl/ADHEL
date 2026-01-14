import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { newsItems } from '../data/news';
import ImageCarousel from '../components/ImageCarousel';

function NewsDetailPage() {
  const { newsSlug } = useParams<{ newsSlug: string }>();
  const article = newsItems.find((item) => item.slug === newsSlug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Actualité introuvable</h1>
          <p className="text-gray-600 mb-6">
            L’article que vous recherchez n’existe plus ou a été déplacé. Retournez à l’accueil pour découvrir les
            dernières actualités de l’association.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors mb-8"
        >
          <ChevronLeft className="h-5 w-5" />
          Retour aux actualités
        </Link>

        <article className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8 md:p-12">
          <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide mb-2">{article.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{article.excerpt}</p>

          {article.gallery && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.gallery.heading}</h2>
              {article.gallery.description && (
                <p className="text-gray-600 mb-6">{article.gallery.description}</p>
              )}
              <ImageCarousel images={article.gallery.images} />
            </section>
          )}
        </article>
      </div>
    </div>
  );
}

export default NewsDetailPage;

