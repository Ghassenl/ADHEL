import { Users, Star, Heart, Award } from 'lucide-react';
import { boardMembers, bureauMembers, foundingStats } from '../data/members';
import BackToHomeButton from '../components/BackToHomeButton';

function MembersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHomeButton className="text-left" />
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="h-4 w-4" />
            Les forces vives de l’ADHEL
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Membres de l’association</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L’ADHEL compte {foundingStats.foundingMembers} membres fondateurs (6 octobre 2025) et a franchi le cap des{' '}
            <span className="font-semibold text-emerald-600">{foundingStats.milestoneCount} adhérents</span> le{' '}
            {foundingStats.milestoneDate}. Découvrez l’équipe qui anime au quotidien notre écoquartier.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {[
            { label: 'Fondation', value: `${foundingStats.foundingMembers} membres`, icon: Star },
            { label: 'Cap franchi', value: `${foundingStats.milestoneCount} adhérents`, icon: Award },
            { label: 'Esprit ADHEL', value: 'Solidarité & convivialité', icon: Heart },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-emerald-100 text-emerald-600 rounded-xl p-3">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-emerald-600 font-semibold">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Star className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Le bureau</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {bureauMembers.map((member) => (
              <article
                key={member.name}
                className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 hover:border-emerald-300 transition-all flex flex-col md:flex-row gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg bg-emerald-50">
                    <img
                      src={member.photoUrl}
                      alt={`Portrait de ${member.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-2">{member.role}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Conseil d’administration</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <article
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-emerald-200 transition-all text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md mb-4 bg-emerald-50">
                  <img
                    src={member.photoUrl}
                    alt={`Portrait de ${member.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-1">{member.role}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MembersPage;

