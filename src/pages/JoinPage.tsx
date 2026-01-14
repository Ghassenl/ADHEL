import { useState } from 'react';
import { Users, Heart, Zap, CheckCircle, Send, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [usedEmailFallback, setUsedEmailFallback] = useState(false);

  const interests = [
    { id: 'events', label: 'Événements festifs', icon: '🎉' },
    { id: 'sports', label: 'Activités sportives', icon: '⚽' },
    { id: 'solidarity', label: 'Actions solidaires', icon: '❤️' },
    { id: 'innovation', label: 'Projets innovants', icon: '💡' },
    { id: 'communication', label: 'Communication', icon: '📢' },
    { id: 'partnerships', label: 'Partenariats', icon: '🤝' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interestId)
        ? formData.interests.filter(id => id !== interestId)
        : [...formData.interests, interestId]
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setUsedEmailFallback(false);

    try {
      const submissionUrl = import.meta.env.VITE_JOIN_FORM_ENDPOINT as string | undefined;
      const fallbackEmail = import.meta.env.VITE_CONTACT_FALLBACK_EMAIL || 'contact.adhel@gmail.com';

      if (submissionUrl) {
        const response = await fetch(submissionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Submission failed with status ${response.status}`);
        }
      } else {
        const subject = encodeURIComponent('Demande d’adhésion ADHEL');
        const body = encodeURIComponent(
          [
            `Nom : ${formData.name}`,
            `Email : ${formData.email}`,
            formData.phone ? `Téléphone : ${formData.phone}` : '',
            '',
            'Intérêts :',
            formData.interests.length ? formData.interests.join(', ') : 'Non précisé',
          ]
            .filter(Boolean)
            .join('\n')
        );
        window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
        setUsedEmailFallback(true);
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interests: [] });

      setTimeout(() => {
        setIsSubmitted(false);
        setUsedEmailFallback(false);
      }, 6000);
    } catch (error) {
      console.error(error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi de votre demande. Vous pouvez réessayer ou contacter directement contact.adhel@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-12 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour à l'accueil
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nous Rejoindre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L'ADHEL est une association ouverte à tous les habitants de l'écoquartier Lavallée.
            Rejoignez-nous pour participer à la vie du quartier et créer ensemble une communauté plus solidaire !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Accessible à Tous",
              desc: "Peu importe votre âge ou vos compétences, il y a une place pour vous dans l'ADHEL"
            },
            {
              icon: Zap,
              title: "Plusieurs Rôles",
              desc: "Animateur, bénévole, organisateur ou simple participant : à vous de choisir !"
            },
            {
              icon: Heart,
              title: "Valeurs Communes",
              desc: "Solidarité, convivialité et engagement au service du quartier"
            }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100 hover:border-emerald-300"
              >
                <Icon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-125 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Formulaire d'adhésion</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="jean@exemple.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-3">
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="+33 6 12 34 56 78"
              />
            </div>

            <div>
              <p className="block text-sm font-semibold text-gray-900 mb-4">
                Domaines d'intérêt
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    type="button"
                    onClick={() => handleInterestToggle(interest.id)}
                    className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 cursor-pointer text-left ${
                      formData.interests.includes(interest.id)
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 bg-white hover:border-emerald-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{interest.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{interest.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {isSubmitted ? (
              <div className="bg-green-100 text-green-800 py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 animate-scale-in">
                <CheckCircle className="h-5 w-5" />
                {usedEmailFallback
                  ? 'Votre messagerie s’ouvre pour finaliser la demande.'
                  : 'Merci pour votre candidature ! Nous vous contacterons bientôt.'}
              </div>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Nous Rejoindre
                  </>
                )}
              </button>
            )}
            {submitError && (
              <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Des questions ?</h3>
          <p className="text-gray-700 mb-4">
            N'hésitez pas à nous contacter directement pour plus d'informations sur l'association.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact.adhel@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all"
            >
              Email
            </a>
            <a
              href="https://wa.me/33664306362"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
