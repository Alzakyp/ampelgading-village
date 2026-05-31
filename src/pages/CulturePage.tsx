import { useEffect, useState } from 'react';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import heroCulture from '../assets/images/culture/hero-culture.png';
import cultureDance from '../assets/images/culture/culture-dance.png';
import remoDance from '../assets/images/culture/remo-dance.png';
import remoDanceGeser from '../assets/images/culture/remo-dance-geser.png';
import livingSpiritualyGeser1 from '../assets/images/culture/living-spiritualy-geser-1.png';
import livingSpiritualyGeser2 from '../assets/images/culture/living-spiritualy-geser-2.png';
import livingSpiritualyGeser3 from '../assets/images/culture/living-spiritualy-geser-3.png';

const remoText =
  'Remo Dance is part of the welcoming tradition in Ampelgading Tourism Village, performed as a gesture of respect and hospitality for visitors. Its dynamic and expressive movements reflect the spirit, warmth, and character of the local community. In certain moments, guests are also invited to join the dance, creating a more immersive and interactive cultural experience. More than just a performance, Tari Remo becomes a symbol of togetherness and a way for the people of Ampelgading to share their culture with every visitor.';

const spiritualityText =
  "The vihara in Ampelgading Tourism Village is part of the community's spiritual life, existing harmoniously alongside the village's culture and everyday activities. More than a place of worship, the vihara serves as a space for reflection, tranquility, and a symbol of the diversity preserved within the community. Its peaceful atmosphere, architectural details, and ongoing spiritual activities create a cultural experience that reflects the values of tolerance and harmony in the daily life of Ampelgading's people.";

interface CultureFeatureProps {
  title: string;
  text: string;
  images: string[];
  alt: string;
}

function CultureFeature({ title, text, images, alt }: CultureFeatureProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="bg-[#F5EBC7]">
      <div className="relative h-[540px] overflow-hidden md:h-[680px] lg:h-[860px]">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={`${title}-${index}`}
              src={image}
              alt={alt}
              aria-hidden={index !== activeSlide}
              className="h-full w-full shrink-0 object-cover object-center"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#242D17]/62 via-[#242D17]/16 to-transparent" />
        <h2 className="font-editorial absolute bottom-8 left-6 text-[42px] leading-none font-medium text-[#FFFFFF] md:bottom-10 md:left-10 md:text-[54px] lg:bottom-14 lg:left-14 lg:text-[64px]">
          {title}
        </h2>
        {totalSlides > 1 ? (
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-8">
            {images.map((_, index) => (
              <span
                key={`${title}-dot-${index}`}
                className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-6 bg-[#FFFFFF]' : 'w-2 bg-[#FFFFFF]/55'}`}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="mx-auto max-w-[1120px] px-6 py-14 text-[15px] leading-[1.7] text-[#685A31] sm:px-8 md:text-[16px] lg:px-10 lg:py-20 lg:text-[18px]">
        <p>{text}</p>
      </div>
    </section>
  );
}

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-[#F5EBC7] text-[#4F602C]">
      <Navbar />
      <main>
        <section className="relative flex h-[480px] items-center justify-center overflow-hidden text-center lg:h-[700px]">
          <img src={heroCulture} alt="Ampelgading cultural tradition" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#242D17]/58" />
          <div className="relative z-10 mx-auto max-w-[980px] px-5 text-[#FFFFFF]">
            <p className="font-editorial text-[28px] font-semibold md:text-[34px]">Living Culture</p>
            <h1 className="font-editorial mt-5 text-[38px] leading-[1.15] font-medium md:text-[48px] lg:text-[56px]">
              Experience culture through tradition
            </h1>
          </div>
        </section>

        <section>
          <img src={cultureDance} alt="Culture dance decorative separator" className="block h-auto w-full" />
        </section>

        <CultureFeature
          title="Remo Dance"
          images={[remoDance, remoDanceGeser]}
          alt="Remo Dance cultural costume and tradition"
          text={remoText}
        />

        <CultureFeature
          title="Living Spirituality"
          images={[livingSpiritualyGeser1, livingSpiritualyGeser2, livingSpiritualyGeser3]}
          alt="Spiritual life around Ampelgading village"
          text={spiritualityText}
        />
      </main>
      <Footer />
    </div>
  );
}
