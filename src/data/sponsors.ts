export interface Sponsor {
  name: string;
  description: string;
  website?: string;
  tier: 'principal' | 'support';
  focus: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Citya Châtenay-Malabry',
    description:
      'Acteur majeur de l’immobilier en France, Citya nous accompagne sur la durée pour développer de nouvelles initiatives au service du quartier.',
    website: 'https://www.citya.com/',
    tier: 'principal',
    focus: 'Immobilier & gestion de copropriété',
  },
  {
    name: 'Carrefour City Lavallée',
    description:
      'Le commerce de proximité qui soutient concrètement la logistique de nos événements et facilite les collectes solidaires.',
    tier: 'support',
    focus: 'Alimentation & proximité',
  },
  {
    name: 'Basilic & Co',
    description:
      'Restaurant partenaire qui fournit des gourmandises pour nos rendez-vous conviviaux et relaie nos campagnes auprès de sa clientèle.',
    website: 'https://basilic-and-co.com/',
    tier: 'support',
    focus: 'Restauration & artisanat',
  },
  {
    name: 'Mathilde Fréville Pâtisserie',
    description:
      'La cheffe pâtissière du quartier qui offre des douceurs pour récompenser bénévoles et enfants après nos animations.',
    website: 'https://www.mathildefreville.com/',
    tier: 'support',
    focus: 'Artisanat & gourmandises',
  },
  {
    name: 'Ville de Châtenay-Malabry',
    description:
      'La municipalité met à disposition des moyens logistiques et relaie nos actions à l’échelle de la ville pour créer des synergies durables.',
    tier: 'principal',
    focus: 'Institution & soutien logistique',
  },
];

