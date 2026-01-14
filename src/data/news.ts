export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'news' | 'press';
  link?: string;
  gallery?: {
    heading: string;
    description?: string;
    images: Array<{ src: string; alt: string }>;
  };
}

export const newsItems: NewsItem[] = [
  {
    slug: 'halloween-2025',
    title: 'Halloween 2025 : une première édition mémorable',
    excerpt:
      'Plus de 120 voisins ont sillonné les rues décorées de Lavallée. Merci à tous les bénévoles qui ont assuré sécurité et ambiance !',
    date: '3 novembre 2025',
    category: 'news',
    gallery: {
      heading: 'Souvenirs en images',
      description:
        'Un aperçu de la soirée du 31 octobre 2025 : décorations lumineuses, défilé costumé et tournée des bonbons encadrée par nos bénévoles.',
      images: [
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0717-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: 'Défilé d’enfants déguisés pour Halloween 2025',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0737-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: 'Animations lumineuses et citrouilles décorées pour Halloween 2025',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0736-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: 'Distribution de bonbons au cœur du quartier Lavallée',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0743-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0721-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0719-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0734-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0729-high.jpg?enable-io=true&crop=1%3A1&width=1920',
          alt: '',
        },
      ],
    },
  },
  {
    slug: 'operation-nounours-2025',
    title: 'Opération Nounours : les commerçants jouent le jeu',
    excerpt:
      'Nous accueillons les nounours des Gobelins, grâce à Philippe Labourel, jusqu\'au 8 décembre.Venez les découvrir dans les boutiques de LaVallée',
    date: '27 octobre 2025',
    category: 'news',
    gallery: {
      heading: 'Souvenirs en images',
      description:
        'Quel est le plus beau nounours ? à vous de décider !',
      images: [
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/1f2d2e54-8ed6-43e9-b580-1497b91f35be-high.jpg',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/04f897d6-ccd0-4549-bb67-71b79b483fba-high.jpg',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/7aa22571-f5f6-4689-96b4-bea5cfb584af-high.jpg',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/030e883a-c85a-4c44-b7f9-5165de31c65c-high.jpg',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/b33e6746-0e74-4e56-945a-616d6e9f10cb-high.jpg',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/cbee4fad-5b6f-47fb-8821-26c7745d1986-high.jpg',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/d5a54984-8477-416a-abd5-c55674acec47-high.jpg',
          alt: '',
        },
        {
          src: 'https://primary.jwwb.nl/public/l/a/j/temp-buueixitohaytlepimuy/img_0540-high.png',
          alt: '',
        },
      ],
    },
  },
  {
    slug: 'citya-renouvelle-son-soutien',
    title: 'Citya renouvelle son soutien à l’ADHEL',
    excerpt:
      'Notre partenaire principal reconduit l’accompagnement financier et logistique pour 2026. Une belle reconnaissance du travail associatif.',
    date: '12 septembre 2025',
    category: 'press',
    link: 'https://www.citya.com/',
  },
  {
    slug: 'lavallee-dans-le-journal-municipal',
    title: 'Lavallée dans le journal municipal',
    excerpt:
      'Le magazine de Châtenay-Malabry met à l’honneur le Déjeuner Blanc et les actions intergénérationnelles portées par l’ADHEL.',
    date: '1 août 2025',
    category: 'press',
  },
];

