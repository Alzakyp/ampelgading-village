import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import heroGastronomy from '../assets/images/hero-gastronomy.png';
import gastronomyTumpengan from '../assets/images/gastronomy-tumpengan.png';
import makeTraditionalCakeGastronomy from '../assets/images/make-traditional-cake-gastronomy.png';
import ketupatGastronomy from '../assets/images/ketupat-gastronomy.png';
import coffeeGastronomy from '../assets/images/coffee-gastronomy.png';
import drinkCoffeeGastronomy from '../assets/images/drink-coffee-gastronomy.png';
import farmerGastronomy from '../assets/images/farmer-gastronomy.png';

import tumpenganDecoration from '../assets/decorations/tumpengan-decoration.png';
import makeTraditionalCakeDecoration from '../assets/decorations/make-traditional-cake-decoration.png';
import traditionalCoffeeRoasterDecoration from '../assets/decorations/traditional-coffee-roaster-decoration.png';
import drinkCoffeeDecoration from '../assets/decorations/drink-coffee-decoration.png';
import farmerDecoration from '../assets/decorations/farmer-decoration.png';

const gastronomyRows = [
  {
    title: 'Tumpengan',
    description:
      'A traditional communal feast that symbolizes gratitude, togetherness, and the strong connection between villagers through cultural celebrations and local traditions.',
    image: gastronomyTumpengan,
    alt: 'Tumpengan traditional nasi kuning dish',
    imageFirst: true,
    decoration: tumpenganDecoration,
    decorationPlacement: 'right',
  },
  {
    title: 'Make Traditional Cake',
    description:
      'Traditional delicacies handcrafted through generations using local recipes and simple processes that continue to be preserved today.',
    image: makeTraditionalCakeGastronomy,
    alt: 'People making traditional cakes together',
    imageFirst: false,
    decoration: makeTraditionalCakeDecoration,
  },
  {
    title: 'Ketupat & Coconut Leaf Craft',
    description:
      "The art of weaving coconut leaves into ketupat and traditional crafts that remain part of the village's cultural and everyday life.",
    image: ketupatGastronomy,
    alt: 'Ketupat and coconut leaf craft activity',
    imageFirst: true,
    decoration: undefined,
  },
  {
    title: 'Traditional Coffee Roaster',
    description:
      'The traditional roasting process of robusta coffee using local techniques to create its distinctive aroma and authentic flavor.',
    image: coffeeGastronomy,
    alt: 'Traditional robusta coffee roasting process',
    imageFirst: false,
    decoration: traditionalCoffeeRoasterDecoration,
    decorationPlacement: 'right',
  },
  {
    title: 'Drink Coffee in the Garden',
    description:
      'An experience of enjoying robusta coffee directly in the plantation while experiencing the natural surroundings and the daily life of local coffee farmers.',
    image: drinkCoffeeGastronomy,
    alt: 'Coffee experience in Ampelgading garden',
    imageFirst: true,
    decoration: drinkCoffeeDecoration,
    decorationPlacement: 'right',
  },
  {
    title: 'Warmth of Farmer Families',
    description:
      'Experience the warmth of Ampelgading through shared meals, local traditions, and everyday moments with farming families.',
    image: farmerGastronomy,
    alt: 'Warm everyday moment with Ampelgading farming family',
    imageFirst: false,
    decoration: farmerDecoration,
    decorationPlacement: 'right',
  },
];

type GastronomyStoryRowProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  decoration?: string;
  decorationPlacement?: 'top' | 'right';
  imageFirst: boolean;
};

function GastronomyStoryRow({ title, description, image, alt, decoration, decorationPlacement = 'top', imageFirst }: GastronomyStoryRowProps) {
  const textAlignmentClass = imageFirst ? 'lg:justify-self-start' : 'lg:justify-self-end';
  const imageAlignmentClass = imageFirst ? 'lg:justify-self-end' : 'lg:justify-self-start';
  const showRightDecoration = decoration && decorationPlacement === 'right';
  const keepDecorationSmall = title === 'Drink Coffee in the Garden';
  const decorationSizeClass = keepDecorationSmall ? 'w-[115px] lg:w-[125px]' : 'w-[170px] lg:w-[185px]';
  const rightDecorationClass = keepDecorationSmall ? 'w-[115px] lg:w-[125px]' : 'w-[170px] lg:w-[185px]';
  const rightDecorationSpacingClass = keepDecorationSmall ? 'md:pt-[105px] lg:pt-[115px]' : 'md:pt-[150px] lg:pt-[165px]';

  return (
    <article className="mb-[70px] grid grid-cols-1 items-center gap-10 last:mb-0 md:mb-[88px] md:grid-cols-2 md:gap-[72px] lg:mb-[120px] lg:gap-[120px]">
      <div className={`${imageFirst ? 'md:order-1' : 'md:order-2'} ${imageAlignmentClass}`}>
        <img
          src={image}
          alt={alt}
          className="mx-auto block aspect-square w-full max-w-[620px] object-cover md:mx-0"
        />
      </div>

      <div className={`${imageFirst ? 'md:order-2' : 'md:order-1'} ${textAlignmentClass} relative mx-auto w-full max-w-[520px] md:mx-0`}>
        {decoration && decorationPlacement === 'top' ? (
          <img src={decoration} alt="" aria-hidden="true" className={`mb-8 h-auto object-contain opacity-75 ${decorationSizeClass}`} />
        ) : null}
        {showRightDecoration ? (
          <img
            src={decoration}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none mb-6 ml-auto block h-auto -translate-y-1/2 object-contain opacity-75 md:absolute md:top-0 md:right-0 md:mb-0 ${rightDecorationClass}`}
          />
        ) : null}
        <div className={showRightDecoration ? rightDecorationSpacingClass : undefined}>
          <div>
          <h2 className="font-editorial text-[32px] leading-[1.12] font-normal text-[#8F8D43] md:text-[36px] lg:text-[42px]">{title}</h2>
          <p className="mt-[18px] max-w-[430px] text-[14px] leading-[1.55] text-[#4F602C] md:text-[15px]">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function GastronomyPage() {
  return (
    <div className="min-h-screen bg-[#F5EBC7] text-[#4F602C]">
      <Navbar />
      <main>
        <section className="relative flex h-[420px] items-center justify-center overflow-hidden text-center sm:h-[520px] lg:h-[680px]">
          <img src={heroGastronomy} alt="Tumpengan gastronomy experience" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#7D4C24]/45" />
          <div className="relative z-10 mx-auto max-w-[980px] px-5 text-[#F5EBC7]">
            <p className="font-earthtone text-2xl font-[400] md:text-[28px]">Gastronomy Experience</p>
            <h1 className="font-earthtone mt-5 text-[36px] leading-[1.15] font-bold md:text-[52px] lg:text-[62px]">
              Stay, harvest, cook, and dine with local families
            </h1>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F5EBC7] px-5 pt-[80px] pb-[100px] sm:px-8 lg:px-10 lg:pt-[135px] lg:pb-[150px]">
          <div className="relative z-10 mx-auto max-w-[1440px]">
            {gastronomyRows.map((row) => {
              return (
                <GastronomyStoryRow
                  key={row.title}
                  title={row.title}
                  description={row.description}
                  image={row.image}
                  alt={row.alt}
                  decoration={row.decoration}
                  decorationPlacement={row.decorationPlacement as 'top' | 'right' | undefined}
                  imageFirst={row.imageFirst}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
