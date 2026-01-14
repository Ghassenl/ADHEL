export type MemberCategory = 'bureau' | 'board';

export interface MemberProfile {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  category: MemberCategory;
}

const avatar = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=0db47b,f4f4f4&fontFamily=Arial`;

export const members: MemberProfile[] = [
  {
    name: 'Karim Najjar',
    role: 'Président',
    bio: "Fondateur de l'association, il fédère les habitants autour d'une vision commune et porte la voix du quartier auprès des institutions.",
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-10-27-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'bureau',
  },
  {
    name: 'Catherine Gaigeard',
    role: 'Secrétaire',
    bio: 'Garantit le suivi administratif de l’ADHEL et veille à ce que chaque décision du conseil soit documentée et partagée.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-14-19-23-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'bureau',
  },
  {
    name: 'Jonathan Duclaux',
    role: 'Trésorier',
    bio: 'Pilote la gestion budgétaire et assure la transparence financière des projets solidaires et festifs du quartier.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-15-53-07-high.png?enable-io=true&crop=1%3A1%2Coffset-y5&width=147',
    category: 'bureau',
  },
  {
    name: 'Fabien Duchesne',
    role: 'Premier Vice-président',
    bio: 'Coordonne les grands événements et accompagne les bénévoles sur le terrain pour garantir fluidité et convivialité.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-14-24-53-high.png?enable-io=true&crop=1%3A1%2Coffset-y19&width=147',
    category: 'bureau',
  },
  {
    name: 'Edouard Prime',
    role: 'Deuxième Vice-président',
    bio: 'Référent des partenariats de proximité, il facilite les collaborations avec les commerçants et acteurs locaux.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-15-53-15-high.png?enable-io=true&crop=1%3A1%2Coffset-y30&width=147',
    category: 'bureau',
  },
  {
    name: 'Ahmed Bazine',
    role: 'Trésorier adjoint',
    bio: 'Soutient la trésorerie sur le suivi des adhésions et des dépenses liées aux projets en cours de l’association.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-05-07-19-43-high.png?enable-io=true&crop=1%3A1%2Coffset-y27&width=147',
    category: 'bureau',
  },
  {
    name: 'Jean-Michel Murgues',
    role: 'Secrétaire adjoint',
    bio: 'Assure le relais d’information entre les équipes et prépare les comptes-rendus de réunions pour les membres.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/image-high-ty1k22.png?enable-io=true&crop=1%3A1&width=147',
    category: 'bureau',
  },
  {
    name: 'Aurélie Muller',
    role: 'Membre du conseil d’administration',
    bio: 'Anime le réseau des nouveaux adhérents et propose des ateliers conviviaux pour faciliter les rencontres.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-14-58-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
  {
    name: 'Thomas Froment',
    role: 'Membre du conseil d’administration',
    bio: 'Responsable logistique lors des événements de quartier et soutien des équipes techniques.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-15-23-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
  {
    name: 'Franck Lanore',
    role: 'Membre du conseil d’administration',
    bio: 'Veille à la sécurité des animations familiales et coordonne les bénévoles sur le terrain.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-17-18-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
  {
    name: 'Myriam Louis-Louisy',
    role: 'Membre du conseil d’administration',
    bio: 'Ambassadrice des actions solidaires, elle développe des initiatives intergénérationnelles.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-17-27-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
  {
    name: 'Paul Moreel',
    role: 'Membre du conseil d’administration',
    bio: 'Force de proposition sur les projets d’aménagement et la valorisation des espaces communs du quartier.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-22-50-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
  {
    name: 'Charlotte Comerman',
    role: 'Membre du conseil d’administration',
    bio: 'Coordonne la communication digitale et relaie les actions de l’ADHEL auprès des familles.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-24-46-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
  {
    name: 'Valérie Duchesne',
    role: 'Membre du conseil d’administration',
    bio: 'Soutient les projets culturels et accompagne les ateliers créatifs proposés aux enfants.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-05-09-19-57-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
  {
    name: 'Maxime Garreau',
    role: 'Membre du conseil d’administration',
    bio: 'Référent des actions sportives pour les adolescents et relais des initiatives auprès des écoles.',
    photoUrl: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/capture-d-cran-2025-11-04-18-24-58-high.png?enable-io=true&crop=1%3A1&width=147',
    category: 'board',
  },
];

export const bureauMembers = members.filter((member) => member.category === 'bureau');
export const boardMembers = members.filter((member) => member.category === 'board');

export const foundingStats = {
  foundingMembers: 15,
  milestoneDate: '7 novembre 2025',
  milestoneCount: 100,
};
