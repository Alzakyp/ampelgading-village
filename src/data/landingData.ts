import type { ContactItem, FooterLink, NavItem, StoryImage, StoryParagraph } from '../types/landing';

const imageAssets = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;
const iconAssets = import.meta.glob('../assets/icons/*.svg', { eager: true, import: 'default' }) as Record<string, string>;
const logoAssets = import.meta.glob('../assets/logos/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;
const decorationAssets = import.meta.glob('../assets/decorations/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const getAsset = (assets: Record<string, string>, preferred: string[], fallback?: string) => {
  for (const key of preferred) {
    const foundKey = Object.keys(assets).find((assetKey) => assetKey.endsWith(`/${key}`));
    if (foundKey) return assets[foundKey];
  }
  return fallback;
};

export const navItems: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Gastronomy', href: '/gastronomy' },
  { label: 'Culture', href: '/culture' },
  { label: 'Contact', href: '/contact' },
];

const heroFallback = getAsset(imageAssets, ['hero-ampelgading.jpg']);

export const heroData = {
  eyebrow: 'Ampelgading',
  title: 'Experience The Journey',
  image: getAsset(imageAssets, ['hero-ampelgading.png'], heroFallback),
};

export const brandAssets = {
  headerLogo: getAsset(logoAssets, ['ampelgading-logo.png', 'ampelgading-logo-header.svg', 'ampelgading-logo.svg']),
  footerLogo: getAsset(
    logoAssets,
    ['ampelgading-logo-white.png', 'ampelgading-logo-footer.svg', 'ampelgading-logo.png', 'ampelgading-logo.svg'],
  ),
};

export const iconAssetsMap = {
  instagram: getAsset(iconAssets, ['social-icon-1.svg', 'instagram-icon.svg']),
  facebook: getAsset(iconAssets, ['social-icon-2.svg', 'facebook-icon.svg']),
  location: getAsset(iconAssets, ['location-icon.svg']),
  phone: getAsset(iconAssets, ['phone-icon.svg']),
  email: getAsset(iconAssets, ['email-icon.svg']),
};

export const decorations = {
  organicLarge: getAsset(decorationAssets, ['organic-lines-large.svg']),
  organicFooter: getAsset(decorationAssets, ['organic-lines-footer.svg']),
  group727: getAsset(decorationAssets, ['group-727.svg']),
  vectorDecor: getAsset(decorationAssets, ['vector-decor.svg']),
  ranting: getAsset(decorationAssets, ['ranting.svg', 'organic-lines-large.svg']),
  daun: getAsset(decorationAssets, ['daun.svg', 'vector-decor.svg']),
};

export const storyParagraphs: StoryParagraph[] = [
  {
    id: 'p1',
    text: 'The experience in Ampelgading does not begin at the dining table alone. It grows from plantations that have been cared for across generations, through processes carried out wholeheartedly by a community that lives side by side with nature.',
  },
  {
    id: 'p2',
    text: 'Here, visitors do not simply come to enjoy the harvest, but to walk through Ampelgading\'s plantations, pick produce directly from the fields, witness how traditional dishes are prepared, and even take part in the coffee roasting process that has become part of the community\'s everyday life.',
  },
  {
    id: 'p3',
    text: 'Every dish, every aroma, and every process carries a story about a way of life shaped over time. Tradition is not presented as a performance, but exists naturally within the activities that continue to be practiced to this day.',
  },
  {
    id: 'p4',
    text: 'Ampelgading is more than just a destination for tourism, it is a space to experience the journey of flavor as a complete and meaningful experience. Through every encounter, visitors bring home not only memories, but also new knowledge, skills, and perspectives that can be carried into their everyday lives.',
  },
];

export const storyImages: StoryImage[] = [
  { id: 'img-0405', src: getAsset(imageAssets, ['img-0405.png'], heroFallback) ?? '', alt: 'Plantation landscape in Ampelgading' },
  { id: 'imggg', src: getAsset(imageAssets, ['imggg.png'], heroFallback) ?? '', alt: 'Community activity in the village area' },
  { id: 'img-0423', src: getAsset(imageAssets, ['img-0423.png'], heroFallback) ?? '', alt: 'Harvest and produce from Ampelgading' },
  {
    id: 'grading-1',
    src: getAsset(imageAssets, ['color-grading-satu.png'], heroFallback) ?? '',
    alt: 'Traditional cooking process and local gastronomy',
  },
  {
    id: 'grading-2',
    src: getAsset(imageAssets, ['color-grading-dua.png'], heroFallback) ?? '',
    alt: 'Village dining and tradition moment',
  },
  // TODO: add optional files when available: img-0460.png, img-0274.png, img-0379.png, image-3.png
  { id: 'img-0460', src: getAsset(imageAssets, ['img-0460.png']), alt: 'Extended story collage photo 1' },
  { id: 'img-0274', src: getAsset(imageAssets, ['img-0274.png']), alt: 'Extended story collage photo 2' },
  { id: 'img-0379', src: getAsset(imageAssets, ['img-0379.png']), alt: 'Extended story collage photo 3' },
  { id: 'image-3', src: getAsset(imageAssets, ['image-3.png']), alt: 'Extended story collage photo 4' },
];

export const experienceWords = ['Step In', 'Take Part', 'Feel It'];

export const footerDescription =
  'Ampelgading is a place to experience flavor, tradition, and nature through the everyday life of its people.';

export const footerLinks: FooterLink[] = navItems;

export const contactItems: ContactItem[] = [
  { label: 'Ampelgading tourism village' },
  { label: '08123253153' },
  { label: 'mujiono_heri@yahoo.com' },
];
