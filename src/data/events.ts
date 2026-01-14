export type EventStatus = 'upcoming' | 'past';

export interface EventScheduleItem {
  time: string;
  activity: string;
}

export interface EventDetail {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  fullDescription: string;
  type: string;
  attendees: string;
  imageGradient: string;
  activities: string[];
  schedule: EventScheduleItem[];
  requirements: string[];
  benefits: string[];
  contactEmail: string;
  status: EventStatus;
}

const baseEvents: EventDetail[] = [
  {
    slug: 'dejeuner-blanc',
    title: 'Déjeuner Blanc 2026',
    date: 'Été 2026 (date à confirmer)',
    location: 'Espaces verts - Écoquartier Lavallée',
    description:
      'Retrouvez notre événement phare : un déjeuner convivial en blanc dans les espaces verts du quartier',
    fullDescription:
      'Le Déjeuner Blanc est un événement festif et fédérateur qui rassemble tous les habitants du quartier. Habillés de blanc, petits et grands se retrouvent pour partager un repas dans une atmosphère conviviale et bienveillante.',
    type: 'Festif',
    attendees: '100+',
    imageGradient: 'from-emerald-500 to-teal-500',
    activities: ['Repas partagé', 'Animations musicales', 'Jeux collectifs', 'Danse', 'Spectacles'],
    schedule: [
      { time: '12:00', activity: 'Accueil & installation' },
      { time: '12:30', activity: 'Début du repas' },
      { time: '14:00', activity: 'Animations & spectacles' },
      { time: '16:00', activity: 'Danse & détente' },
    ],
    requirements: ['Tenue blanche (obligatoire)', 'Plat/boisson à partager', 'Couverts personnels'],
    benefits: ['Moment fédérateur', 'Convivialité garantie', 'Photo de groupe', 'Souvenirs en famille'],
    contactEmail: 'contact.adhel@gmail.com',
    status: 'upcoming',
  },
  {
    slug: 'sport-partage',
    title: 'Sport & Partage',
    date: 'Tous les premiers samedis du mois',
    location: 'Terrains de sport - Écoquartier Lavallée',
    description:
      'Séances sportives ouvertes à tous : football, yoga, course à pied et bien plus',
    fullDescription:
      'Sport & Partage est une initiative conviviale et inclusive qui vise à promouvoir un mode de vie sain et actif au sein de notre quartier. Que vous soyez sportif confirmé ou débutant, chacun trouvera une activité adaptée à son niveau.',
    type: 'Sportif',
    attendees: '30+',
    imageGradient: 'from-amber-500 to-orange-500',
    activities: ['Football', 'Yoga', 'Course à pied', 'Badminton', 'Étirements collectifs'],
    schedule: [
      { time: '09:00', activity: 'Accueil & échauffement' },
      { time: '09:30', activity: 'Activités sportives par niveau' },
      { time: '11:00', activity: 'Récupération & détente' },
      { time: '11:30', activity: 'Moment de convivialité & partage' },
    ],
    requirements: ['Vêtements de sport confortables', 'Chaussures adaptées', "Bouteille d'eau"],
    benefits: ['Amélioration de la santé', 'Rencontres sociales', 'Ambiance conviviale', 'Sport gratuit & accessible'],
    contactEmail: 'contact.adhel@gmail.com',
    status: 'upcoming',
  },
  {
    slug: 'operation-nounours',
    title: 'Opération Nounours',
    date: '22 octobre 2026',
    location: 'Commerçants partenaires - Écoquartier Lavallée',
    description:
      'Une famille de nounours investit les vitrines des commerces pour faire sourire petits et grands.',
    fullDescription:
      "L'Opération Nounours est une tournée des commerces du quartier pendant laquelle les habitants découvrent une famille de peluches géantes. Les enfants partent à la chasse aux photos, les commerçants animent leurs vitrines et l'association tisse du lien avec chaque génération.",
    type: 'Solidaire',
    attendees: '50+',
    imageGradient: 'from-rose-500 to-pink-500',
    activities: ['Parcours découverte', 'Animations commerçants', 'Atelier photo', 'Goûter partagé'],
    schedule: [
      { time: '10:00', activity: 'Accueil devant la place centrale' },
      { time: '10:30', activity: 'Parcours des commerces partenaires' },
      { time: '12:00', activity: 'Atelier photo souvenirs' },
      { time: '15:00', activity: 'Goûter partagé & remise de prix' },
    ],
    requirements: ['Appareil photo ou smartphone', 'Bonne humeur', 'Peluches à offrir (facultatif)'],
    benefits: ['Soutien aux commerçants', 'Moments familiaux', 'Sourires garantis', 'Solidarité locale'],
    contactEmail: 'contact.adhel@gmail.com',
    status: 'upcoming',
  },
  {
    slug: 'halloween-2025',
    title: 'Halloween 2025',
    date: '31 octobre 2025',
    location: 'Écoquartier Lavallée',
    description:
      'Une soirée costumée mémorable qui a rassemblé petits et grands autour d’animations effrayantes.',
    fullDescription:
      'Pour sa première édition, Halloween 2025 a transformé Lavallée en village des frissons : défilé costumé, concours de citrouilles, tournée des bonbons encadrée par les bénévoles et grande boom familiale ont rythmé la nuit.',
    type: 'Festif',
    attendees: '120+',
    imageGradient: 'from-purple-600 to-orange-500',
    activities: ['Défilé de costumes', 'Tournée des bonbons', 'Concours de citrouilles', 'Boom familiale'],
    schedule: [
      { time: '17:30', activity: 'Accueil des familles & maquillage' },
      { time: '18:30', activity: 'Départ de la tournée des bonbons' },
      { time: '19:30', activity: 'Concours de citrouilles' },
      { time: '20:30', activity: 'Soirée dansante & surprises' },
    ],
    requirements: ['Costume effrayant', 'Sac à bonbons', 'Lampe torche'],
    benefits: ['Souvenirs inoubliables', 'Rencontres entre voisins', 'Ambiance festive', 'Participation gratuite'],
    contactEmail: 'contact.adhel@gmail.com',
    status: 'past',
  },
  {
    slug: 'dejeuner-blanc-2025',
    title: 'Déjeuner Blanc 2025',
    date: 'Juillet 2025',
    location: 'Espaces verts - Écoquartier Lavallée',
    description:
      'Le tout premier Déjeuner Blanc du quartier avec plus de 80 participants en tenue immaculée.',
    fullDescription:
      'Inspiré des repas conviviaux parisiens, le Déjeuner Blanc 2025 a permis aux habitants de partager un repas champêtre. Musique acoustique, ateliers pour enfants et table commune ont scellé le début d’une tradition estivale.',
    type: 'Festif',
    attendees: '80+',
    imageGradient: 'from-slate-200 to-sky-200',
    activities: ['Repas partagé', 'Concert acoustique', 'Atelier enfants', 'Photo de groupe'],
    schedule: [
      { time: '11:30', activity: 'Installation des tables' },
      { time: '12:30', activity: 'Début du repas partagé' },
      { time: '14:00', activity: 'Concert acoustique' },
      { time: '15:30', activity: 'Photo de groupe & clôture' },
    ],
    requirements: ['Tenue blanche', 'Plat ou boisson à partager', 'Couverts réutilisables'],
    benefits: ['Ambiance élégante', 'Rencontres entre voisins', 'Esprit de partage', 'Souvenir photographique'],
    contactEmail: 'contact.adhel@gmail.com',
    status: 'past',
  },
];

export const eventsBySlug = baseEvents.reduce<Record<string, EventDetail>>((acc, event) => {
  acc[event.slug] = event;
  return acc;
}, {});

export const upcomingEvents = baseEvents.filter((event) => event.status === 'upcoming');

export const pastEvents = baseEvents
  .filter((event) => event.status === 'past')
  .map((event) => ({
    title: event.title,
    date: event.date,
    description: event.description,
    slug: event.slug,
  }));

