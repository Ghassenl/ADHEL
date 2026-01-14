import { Lightbulb, Heart, Newspaper, Store, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      icon: Heart,
      title: "Actions Solidaires",
      description: "Des initiatives pour soutenir les habitants et créer du lien intergénérationnel",
      highlights: ["Opération Peluche", "Aide aux familles", "Soutien aux nouveaux arrivants"],
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Quartier",
      description: "Proposer et mettre en place de nouvelles idées pour améliorer notre cadre de vie",
      highlights: ["Aménagements verts", "Mobilier urbain", "Projets participatifs"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Newspaper,
      title: "Actualités Lavallée",
      description: "Informer les habitants sur la vie du quartier et les événements locaux",
      highlights: ["Newsletter mensuelle", "Réseaux sociaux", "Affichage local"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Store,
      title: "Partenariats Locaux",
      description: "Développer des collaborations avec les commerces et acteurs du territoire",
      highlights: ["Sponsors locaux", "Réductions adhérents", "Événements communs"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-overlay filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Nos Projets
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up-delay' : 'opacity-0'}`}>
            Des initiatives variées pour faire vivre notre quartier et répondre aux besoins des habitants
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-400 transition-all hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={isVisible ? { animationDelay: `${0.1 + index * 0.1}s` } : {}}
              >
                <div className={`bg-gradient-to-r ${project.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-2xl group-hover:-rotate-6 transition-all`}>
                  <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors">{project.description}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-150 group-hover/item:bg-emerald-700 transition-all"></span>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={`group bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative hover:shadow-2xl transition-all transform hover:scale-105 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.4s' } : {}}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 group-hover:translate-y-1 transition-transform">Vous avez une idée de projet ?</h3>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors">
              L'ADHEL est ouverte à toutes les propositions des habitants. Partagez vos idées pour
              améliorer la vie de notre quartier !
            </p>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl"
            >
              Proposer un Projet
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
