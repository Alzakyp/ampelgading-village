import { useEffect, useRef, useState } from 'react';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

import cloveDistillationHero from '../assets/images/clove-distillation-experience.png';
import snakefruitGardenHero from '../assets/images/experience/snakefruit-hero.png';
import coffeeGardenHero from '../assets/images/experience/img-0373-hero-coffee.png';
import cocoaGardenHero from '../assets/images/cocoa-garden-experience.png';

import cloveDecoration from '../assets/icons/clove-distillation-icon.png';
import snakefruitDecoration from '../assets/images/experience/snakefruit-vector.png';
import coffeeDecoration from '../assets/images/experience/group-704.png';
import cocoaDecoration from '../assets/icons/cocoa-garden-icon.png';

import coffeeGardenSlide1 from '../assets/images/experience/coffee-garden-1.png';
import coffeeGardenSlide2 from '../assets/images/experience/coffee-garden-2.png';
import coffeeGardenSlide3 from '../assets/images/experience/coffee-garden-3.png';
import coffeeGardenSlide4 from '../assets/images/experience/coffee-garden-4.png';
import coffeeGardenSlide5 from '../assets/images/experience/coffee-garden-5.png';
import snakefruitSlide2 from '../assets/images/experience/snakefruit-gallery-2.png';
import snakefruitSlide3 from '../assets/images/experience/snakefruit-gallery-3.png';
import snakefruitSlide4 from '../assets/images/experience/snakefruit-gallery-4.png';

type DetailSlug = 'coffee-garden' | 'cocoa-garden' | 'clove-distilation' | 'snakefruit-garden';

interface DetailData {
  title: string;
  heroImage: string;
  decorationImage: string;
  description: string;
  galleryImages: string[];
  showGallery?: boolean;
}

const detailDataMap: Record<DetailSlug, DetailData> = {
  'coffee-garden': {
    title: 'Coffee Garden',
    heroImage: coffeeGardenHero,
    decorationImage: coffeeDecoration,
    description:
      "Walk through Ampelgading's coffee garden and experience the growing process directly from the land. Visitors can observe cultivation activities, interact with local farmers, and feel the atmosphere that shapes the village's coffee tradition.",
    galleryImages: [coffeeGardenSlide1, coffeeGardenSlide2, coffeeGardenSlide3, coffeeGardenSlide4, coffeeGardenSlide5],
  },
  'cocoa-garden': {
    title: 'Cocoa Garden',
    heroImage: cocoaGardenHero,
    decorationImage: cocoaDecoration,
    description:
      "The cocoa gardens of Ampelgading Tourism Village offer a close look at how local communities cultivate and care for cacao trees through seasonal cycles. Visitors can explore the plantation paths, learn post-harvest handling, and understand how cocoa farming supports the village's cultural and economic life.",
    galleryImages: [cocoaGardenHero],
    showGallery: true,
  },
  'clove-distilation': {
    title: 'Clove Distilation',
    heroImage: cloveDistillationHero,
    decorationImage: cloveDecoration,
    description:
      "Experience the traditional clove oil distillation of Ampelgading Tourism Village, a generations-old heritage that reflects the close connection between the local community, nature, and village culture. Using traditional wood-fired distillation methods, clove leaves and stems are slowly processed to produce essential oil with a warm and calming aroma.\n\nSurrounded by lush plantations and the peaceful atmosphere of the village, visitors can witness the distillation process that has long been part of daily life in Ampelgading. Cloves were once among the most valuable spices in the archipelago, carrying the legacy of Nusantara's trade routes to many parts of the world.",
    galleryImages: [cloveDistillationHero, cloveDistillationHero, cloveDistillationHero],
  },
  'snakefruit-garden': {
    title: 'Snakefruit Garden',
    heroImage: snakefruitGardenHero,
    decorationImage: snakefruitDecoration,
    description:
      "Discover the distinctive character of Ampelgading's snakefruit gardens where local farmers preserve cultivation techniques passed through generations. Visitors can walk between the dense plantations, understand harvesting stages, and experience how this fruit becomes part of the village's daily life and local economy.",
    galleryImages: [snakefruitGardenHero, snakefruitSlide2, snakefruitSlide3, snakefruitSlide4],
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

  return (
    <div className="min-h-screen bg-[#F5EBC7] text-[#4F602C]">
      <Navbar />
      <main>
        <section className="relative h-[500px] overflow-hidden md:h-[620px] lg:h-[720px]">
          <img src={detail.heroImage} alt={`${detail.title} hero background`} className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#242D17]/55" />
          <h1 className="font-editorial absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[40px] leading-none font-medium text-[#FFFFFF] md:text-[52px] lg:bottom-12 lg:text-[68px]">
            {detail.title}
          </h1>
        </section>

        <section className="bg-[#F5EBC7] px-5 pb-20 pt-[90px] sm:px-8 sm:pt-[100px] lg:px-10 lg:pb-24 lg:pt-[120px]">
          <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-2 lg:items-start">
            <div className="max-w-[650px]">
              <p className="whitespace-pre-line text-[16px] leading-[1.7] text-[#4F602C] md:text-[18px]">{detail.description}</p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <img src={detail.decorationImage} alt={`${detail.title} decoration`} className="h-auto w-[220px] opacity-75 md:w-[300px] lg:w-[360px]" />
            </div>
          </div>

          {showGallery && detail.galleryImages.length > 0 ? (
            <CultureStyleStripSlider images={detail.galleryImages} title={detail.title} />
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
