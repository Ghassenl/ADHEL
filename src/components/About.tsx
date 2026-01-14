import { Sprout, Target, Handshake, Award, Sparkles, Calendar as CalendarIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const items = [
    { Icon: Sprout, title: "Notre Origine", desc: "Née de l'initiative des habitants de l'écoquartier Lavallée, l'ADHEL incarne\nl'esprit de solidarité et d'engagement local", color: "from-emerald-400 to-emerald-600" },
    { Icon: Target, title: "Notre Mission", desc: "Créer un quartier vivant où chacun trouve sa place à travers des événements\nfestifs, sportifs et solidaires", color: "from-teal-400 to-teal-600" },
    { Icon: Handshake, title: "Nos Partenaires", desc: "Nous collaborons avec les commerces locaux et les acteurs du territoire\npour renforcer le lien social", color: "from-cyan-400 to-cyan-600" }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            À Propos de l'ADHEL
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up-delay' : 'opacity-0'}`}>
            Fondée en octobre 2025, notre association rassemble les habitants de l'écoquartier Lavallée
            autour de valeurs communes de partage et de convivialité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {items.map(({ Icon, title, desc, color }, idx) => (
            <div
              key={idx}
              className={`group text-center transform transition-all duration-300 hover:scale-105 cursor-pointer ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={isVisible ? { animationDelay: `${0.1 + idx * 0.1}s` } : {}}
            >
              <div className={`bg-gradient-to-br ${color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:shadow-2xl transition-all`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Award, label: "80+ Membres", desc: "Familles actives dans l'association" },
            { icon: CalendarIcon, label: "12+ Événements", desc: "Organisés chaque année" },
            { icon: Sparkles, label: "100% Bénévole", desc: "Association gérée par les habitants" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100 hover:border-emerald-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={isVisible ? { animationDelay: `${0.3 + idx * 0.1}s` } : {}}
              >
                <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-125 transition-transform" />
                <h4 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{stat.label}</h4>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">{stat.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-emerald-100 hover:border-emerald-300 transition-all ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.5s' } : {}}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.3s' } : {}}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Rejoignez l'Aventure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Que vous soyez nouveau résident ou habitant de longue date, l'ADHEL vous accueille
                pour participer à la vie du quartier, proposer vos idées et partager des moments
                conviviaux avec vos voisins.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Événements festifs', 'Activités sportives', 'Actions solidaires', 'Déjeuners blancs'].map((tag, i) => (
                  <div key={i} className="group/tag bg-white px-4 py-2 rounded-full text-sm font-medium text-emerald-700 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-400 transition-all transform hover:scale-105 cursor-pointer">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-emerald-300 transition-all transform hover:-translate-y-2 ${isVisible ? 'animate-slide-up-delay' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.3s' } : {}}>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Informations</h4>
              <div className="space-y-3">
                {[
                  { label: "Date de création", value: "Octobre 2025" },
                  { label: "Email", value: "contact.adhel@gmail.com" },
                  { label: "WhatsApp", value: "+33 6 64 30 63 62" }
                ].map((item, i) => (
                  <div key={i} className="hover:bg-emerald-50 p-2 rounded transition-colors">
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="text-gray-900 font-medium group-hover:text-emerald-700 transition-colors">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
