import { Mail, MessageSquare, MapPin, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [usedEmailFallback, setUsedEmailFallback] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setUsedEmailFallback(false);

    try {
      const submissionUrl = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
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
        const subject = encodeURIComponent(`Contact ADHEL - ${formData.subject}`);
        const body = encodeURIComponent(
          `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
        );
        window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
        setUsedEmailFallback(true);
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
        setUsedEmailFallback(false);
      }, 6000);
    } catch (error) {
      console.error(error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi de votre message. Vous pouvez réessayer ou nous écrire directement à contact.adhel@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nous Contacter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question, une suggestion, ou envie de nous rejoindre ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:contact.adhel@gmail.com" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">
                      contact.adhel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                    <a href="https://wa.me/33664306362" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">
                      +33 6 64 30 63 62
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Localisation</p>
                    <p className="text-gray-900 font-medium">
                      Écoquartier Lavallée, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <Instagram className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Instagram</p>
                    <a href="https://www.instagram.com/adhel_association_lavallee/" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">
                      @adhel_association_lavallee
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Horaires de disponibilité</h4>
              <p className="text-gray-700 leading-relaxed">
                Notre équipe est disponible pour répondre à vos questions du lundi au vendredi.
                Pour les urgences, utilisez notre numéro WhatsApp pour une réponse rapide.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {isSubmitted ? (
                <div className="w-full bg-green-100 text-green-800 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 animate-scale-in">
                  <CheckCircle className="h-5 w-5" />
                  {usedEmailFallback
                    ? 'Nous avons ouvert votre messagerie afin de finaliser l’envoi.'
                    : 'Message envoyé avec succès !'}
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Envoyer le message
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
