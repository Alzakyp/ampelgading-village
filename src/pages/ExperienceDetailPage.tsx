import { useEffect, useRef, useState } from 'react';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

import coffeeGardenHero from '../assets/images/experience/img-0373-hero-coffee.png';
import cloveHeroImage1 from '../assets/images/experience/IMG_9491 1.png';
import cloveHeroImage2 from '../assets/images/experience/IMG_9495 1.png';
import cloveHeroImage3 from '../assets/images/experience/IMG_9496 1.png';
import snakefruitHeroImage1 from '../assets/images/experience/Group 735.png';
import snakefruitHeroImage2 from '../assets/images/experience/IMG_9474 2.png';
import snakefruitHeroImage3 from '../assets/images/experience/IMG_9484 1.png';
import cocoaHeroImage1 from '../assets/images/experience/_MG_8844 (1) 2.png';
import cocoaHeroImage2 from '../assets/images/experience/_MG_8853 (1) 2.png';
import cocoaHeroImage3 from '../assets/images/experience/_MG_8869 (1) 1.png';

import cloveDecoration from '../assets/icons/clove-distillation-icon.png';
import snakefruitDecoration from '../assets/images/experience/snakefruit-vector.png';
import coffeeDecoration from '../assets/images/experience/group-704.png';
import cocoaDecoration from '../assets/icons/cocoa-garden-icon.png';

import coffeeGardenSlide1 from '../assets/images/experience/coffee-garden-1.png';
import coffeeGardenSlide2 from '../assets/images/experience/coffee-garden-2.png';
import coffeeGardenSlide3 from '../assets/images/experience/coffee-garden-3.png';
import coffeeGardenSlide4 from '../assets/images/experience/coffee-garden-4.png';
import coffeeGardenSlide5 from '../assets/images/experience/coffee-garden-5.png';

const cloveHeroImages = [cloveHeroImage1, cloveHeroImage2, cloveHeroImage3];
const snakefruitHeroImages = [snakefruitHeroImage1, snakefruitHeroImage2, snakefruitHeroImage3];
const cocoaHeroImages = [cocoaHeroImage1, cocoaHeroImage2, cocoaHeroImage3];

type DetailSlug = 'coffee-garden' | 'cocoa-garden' | 'clove-distilation' | 'snakefruit-garden';

interface DetailData {
  title: string;
  heroImage: string;
  decorationImage: string;
  description: string;
  galleryImages: string[];
  mainContentImage?: string;
  showGallery?: boolean;
}

const detailDataMap: Record<DetailSlug, DetailData> = {
  'coffee-garden': {
    title: 'Coffee Garden',
    heroImage: coffeeGardenHero,
    decorationImage: coffeeDecoration,
    description:
      "Enjoy the peaceful atmosphere of the Coffee Garden in Ampelgading Tourism Village, where vast coffee plantations thrive amidst cool mountain air and the beauty of the surrounding natural landscape. More than just a plantation, the coffee garden has long been part of the local community's life, preserving the tradition of coffee cultivation passed down through generations.\n\nVisitors can explore the plantation area, learn about the process from planting to coffee processing, while enjoying the distinctive aroma of coffee and the scenic views of Ampelgading. Since long ago, coffee has also been one of the village's important commodities, contributing to the rich history of coffee agriculture and the daily life of the Ampelgading community.",
    galleryImages: [coffeeGardenSlide1, coffeeGardenSlide2, coffeeGardenSlide3, coffeeGardenSlide4, coffeeGardenSlide5],
    mainContentImage: coffeeGardenSlide1,
  },
  'cocoa-garden': {
    title: 'Cocoa Garden',
    heroImage: cocoaHeroImage1,
    decorationImage: cocoaDecoration,
    description:
      'Experience the charm of the Chocolate Garden in Ampelgading Tourism Village, where cacao fruits grow beneath the shade of lush trees and the cool air at the foothills of Mount Semeru. This plantation offers a peaceful atmosphere while showcasing one of the village’s agricultural treasures that has long been part of the daily life of the Ampelgading community.\n\nExperience the charm of the Chocolate Garden in Ampelgading Tourism Village, where cacao fruits grow beneath the shade of lush trees and the cool air at the foothills of Mount Semeru. This plantation offers a peaceful atmosphere while showcasing one of the village’s agricultural treasures that has long been part of the daily life of the Ampelgading community.',
    galleryImages: [],
    showGallery: false,
  },
  'clove-distilation': {
    title: 'Clove Distilation',
    heroImage: cloveHeroImage1,
    decorationImage: cloveDecoration,
    description:
      "Experience the traditional clove oil distillation of Ampelgading Tourism Village, a generations-old heritage that reflects the close connection between the local community, nature, and village culture. Using traditional wood-fired distillation methods, clove leaves and stems are slowly processed to produce essential oil with a warm and calming aroma.\n\nSurrounded by lush plantations and the peaceful atmosphere of the village, visitors can witness the distillation process that has long been part of daily life in Ampelgading. Cloves were once among the most valuable spices in the archipelago, carrying the legacy of Nusantara's trade routes to many parts of the world.",
    galleryImages: [],
    showGallery: false,
  },
  'snakefruit-garden': {
    title: 'Snakefruit Garden',
    heroImage: snakefruitHeroImage1,
    decorationImage: snakefruitDecoration,
    description:
      'Enjoy the experience of exploring the Salak Garden in Ampelgading Tourism Village, a plantation area surrounded by the natural beauty of rural landscapes with rows of salak trees growing at the foot of Mount Semeru. Salak has long been cultivated by the people of Ampelgading and has become one of the village’s distinctive local fruits and agricultural products.\n\nVisitors can learn about the cultivation process, pick the fruit directly from the trees, and enjoy the fresh taste of salak right in the garden. Beyond being a local agricultural commodity, salak also reflects the farming traditions and heritage that have been preserved by the Ampelgading community for generations.',
    galleryImages: [],
    showGallery: false,
  },
};

interface ExperienceDetailPageProps {
  slug: DetailSlug;
}

interface CultureStyleStripSliderProps {
  images: string[];
  title: string;
}

function CultureStyleStripSlider({ images, title }: CultureStyleStripSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measureStep = () => {
      const firstItem = trackRef.current?.firstElementChild as HTMLElement | null;
      if (!firstItem) return;
      setStepPx(firstItem.offsetWidth + 24);
    };

    measureStep();
    window.addEventListener('resize', measureStep);
    return () => window.removeEventListener('resize', measureStep);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mx-auto mt-14 max-w-[1340px] overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-6 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * stepPx}px)` }}
      >
        {images.map((image, index) => (
          <img
            key={`${title}-gallery-${index + 1}`}
            src={image}
            alt={`${title} gallery ${index + 1}`}
            className="h-[170px] w-[230px] shrink-0 object-cover md:h-[195px] md:w-[280px] lg:h-[210px] lg:w-[320px]"
          />
        ))}
      </div>

      {images.length > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <span
              key={`${title}-dot-${index}`}
              className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-6 bg-[#4F602C]' : 'w-2 bg-[#4F602C]/40'}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ExperienceDetailPage({ slug }: ExperienceDetailPageProps) {
  const detail = detailDataMap[slug];
  const showGallery = detail.showGallery ?? true;
  const isCoffeeGarden = slug === 'coffee-garden';
  const isCocoaGarden = slug === 'cocoa-garden';
  const isCloveDistilation = slug === 'clove-distilation';
  const isSnakefruitGarden = slug === 'snakefruit-garden';
  const [activeCoffeeImage, setActiveCoffeeImage] = useState(0);
  const [activeCocoaHeroImage, setActiveCocoaHeroImage] = useState(0);
  const [activeCloveHeroImage, setActiveCloveHeroImage] = useState(0);
  const [activeSnakefruitHeroImage, setActiveSnakefruitHeroImage] = useState(0);
  const heroImages = isCocoaGarden
    ? cocoaHeroImages
    : isCloveDistilation
      ? cloveHeroImages
      : isSnakefruitGarden
        ? snakefruitHeroImages
        : [detail.heroImage];
  const activeHeroImage = isCocoaGarden
    ? activeCocoaHeroImage
    : isCloveDistilation
      ? activeCloveHeroImage
      : isSnakefruitGarden
        ? activeSnakefruitHeroImage
        : 0;

  useEffect(() => {
    if (!isCoffeeGarden || detail.galleryImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveCoffeeImage((prev) => (prev + 1) % detail.galleryImages.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [detail.galleryImages.length, isCoffeeGarden]);

  useEffect(() => {
    if (!isCocoaGarden || cocoaHeroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveCocoaHeroImage((prev) => (prev + 1) % cocoaHeroImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isCocoaGarden]);

  useEffect(() => {
    if (!isCloveDistilation || cloveHeroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveCloveHeroImage((prev) => (prev + 1) % cloveHeroImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isCloveDistilation]);

  useEffect(() => {
    if (!isSnakefruitGarden || snakefruitHeroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveSnakefruitHeroImage((prev) => (prev + 1) % snakefruitHeroImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isSnakefruitGarden]);

  return (
    <div className="min-h-screen bg-[#F5EBC7] text-[#4F602C]">
      <Navbar />
      <main>
        <section className="relative h-[500px] overflow-hidden md:h-[620px] lg:h-[720px]">
          {heroImages.map((image, index) => (
            <img
              key={`${detail.title}-hero-${index + 1}`}
              src={image}
              alt={`${detail.title} hero background ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
                heroImages.length === 1 || activeHeroImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 z-10 bg-[#242D17]/55" />
          {isCoffeeGarden || isCocoaGarden || isCloveDistilation || isSnakefruitGarden ? (
            <div className="absolute top-1/2 left-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center text-[#F5EBC7]">
              <p className="font-earthtone text-[30px] leading-none font-[400] md:text-[40px] lg:text-[48px]">Ampelgading</p>
              <h1 className="font-earthtone mt-4 text-[48px] leading-none font-bold md:text-[68px] lg:text-[92px]">
                {detail.title}
              </h1>
            </div>
          ) : (
            <h1 className="font-editorial absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-[40px] leading-none font-medium text-[#FFFFFF] md:text-[52px] lg:bottom-12 lg:text-[68px]">
              {detail.title}
            </h1>
          )}
        </section>

        <section className="bg-[#F5EBC7] px-5 pb-20 pt-[90px] sm:px-8 sm:pt-[100px] lg:px-10 lg:pb-24 lg:pt-[120px]">
          {isCoffeeGarden ? (
            <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-20">
              <div className="max-w-[560px]">
                <img
                  src={detail.decorationImage}
                  alt={`${detail.title} decoration`}
                  className="h-auto w-[156px] object-contain opacity-75 md:w-[182px] lg:w-[195px]"
                />
                <p className="mt-9 whitespace-pre-line text-[18px] leading-[1.55] text-[#8F8D43] md:text-[19px] lg:text-[20px]">
                  {detail.description}
                </p>
              </div>
              {detail.galleryImages.length > 0 ? (
                <div className="relative h-[460px] w-full overflow-hidden md:h-[560px] lg:h-[680px]">
                  {detail.galleryImages.map((image, index) => (
                    <img
                      key={`${detail.title}-main-${index + 1}`}
                      src={image}
                      alt={`${detail.title} activity ${index + 1}`}
                      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                        activeCoffeeImage === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : isCocoaGarden ? (
            <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-center lg:gap-[100px]">
              <div className="max-w-[680px] whitespace-pre-line text-[18px] leading-[1.65] text-[#8F8D43] md:text-[19px] lg:text-[20px]">
                <p>
                  Experience the charm of the Chocolate Garden in Ampelgading Tourism Village, where cacao fruits grow beneath the shade
                  of lush trees and the cool air at the foothills of Mount Semeru. This plantation offers a peaceful atmosphere while
                  showcasing one of the village’s agricultural treasures that has long been part of the daily life of the Ampelgading
                  community.
                </p>
                <p className="mt-11">
                  Experience the charm of the Chocolate Garden in Ampelgading Tourism Village, where cacao fruits grow beneath the shade
                  of lush trees and the cool air at the foothills of Mount Semeru. This plantation offers a peaceful atmosphere while
                  showcasing one of the village’s agricultural treasures that has long been part of the daily life of the Ampelgading
                  community.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={detail.decorationImage}
                  alt={`${detail.title} decoration`}
                  className="h-auto w-[280px] object-contain opacity-80 md:w-[360px] lg:w-[420px]"
                />
              </div>
            </div>
          ) : isCloveDistilation ? (
            <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-center lg:gap-[100px]">
              <div className="max-w-[680px] whitespace-pre-line text-[18px] leading-[1.65] text-[#8F8D43] md:text-[19px] lg:text-[20px]">
                <p>
                  Experience the traditional clove oil distillation of Ampelgading Tourism Village, a generations-old heritage that
                  reflects the close connection between the local community, nature, and village culture. Using traditional wood-fired
                  distillation methods, clove leaves and stems are slowly processed to produce essential oil with a warm and calming
                  aroma.
                </p>
                <p className="mt-11">
                  Surrounded by lush plantations and the peaceful atmosphere of the village, visitors can witness the distillation process
                  that has long been part of daily life in Ampelgading. Cloves were once among the most valuable spices in the archipelago,
                  carrying the legacy of Nusantara&apos;s trade routes to many parts of the world.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={detail.decorationImage}
                  alt={`${detail.title} decoration`}
                  className="h-auto w-[280px] object-contain opacity-80 md:w-[360px] lg:w-[420px]"
                />
              </div>
            </div>
          ) : isSnakefruitGarden ? (
            <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-center lg:gap-[100px]">
              <div className="max-w-[680px] whitespace-pre-line text-[18px] leading-[1.65] text-[#8F8D43] md:text-[19px] lg:text-[20px]">
                <p>
                  Enjoy the experience of exploring the Salak Garden in Ampelgading Tourism Village, a plantation area surrounded by the
                  natural beauty of rural landscapes with rows of salak trees growing at the foot of Mount Semeru. Salak has long been
                  cultivated by the people of Ampelgading and has become one of the village’s distinctive local fruits and agricultural
                  products.
                </p>
                <p className="mt-11">
                  Visitors can learn about the cultivation process, pick the fruit directly from the trees, and enjoy the fresh taste of
                  salak right in the garden. Beyond being a local agricultural commodity, salak also reflects the farming traditions and
                  heritage that have been preserved by the Ampelgading community for generations.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={detail.decorationImage}
                  alt={`${detail.title} decoration`}
                  className="h-auto w-[280px] object-contain opacity-80 md:w-[360px] lg:w-[420px]"
                />
              </div>
            </div>
          ) : (
            <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-2 lg:items-start">
              <div className="max-w-[650px]">
                <p className="whitespace-pre-line text-[16px] leading-[1.7] text-[#4F602C] md:text-[18px]">{detail.description}</p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <img src={detail.decorationImage} alt={`${detail.title} decoration`} className="h-auto w-[220px] opacity-75 md:w-[300px] lg:w-[360px]" />
              </div>
            </div>
          )}

          {showGallery && !isCoffeeGarden && detail.galleryImages.length > 0 ? (
            <CultureStyleStripSlider images={detail.galleryImages} title={detail.title} />
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
