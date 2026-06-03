import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

import heroExperience from '../assets/images/hero-experience.png';
import coffeeGardenExperience from '../assets/images/coffee-garden-experience.png';
import cocoaGardenExperience from '../assets/images/cocoa-garden-experience.png';
import snakefruitGardenExperience from '../assets/images/snakefruit-garden-experience.png';
import cloveDistillationExperience from '../assets/images/clove-distillation-experience.png';
import tumpangExperience from '../assets/images/tumpang-experience.png';

import coffeeGardenIcon from '../assets/icons/coffee-garden-icon.png';
import cocoaGardenIcon from '../assets/icons/cocoa-garden-icon.png';
import cloveDistillationIcon from '../assets/icons/clove-distillation-icon.png';
import snakefruitGardenIcon from '../assets/icons/snakefruit-garden-icon.png';

const processItems = [
  { label: 'Coffee Garden', icon: coffeeGardenIcon, alt: 'Coffee garden icon' },
  { label: 'Cocoa Garden', icon: cocoaGardenIcon, alt: 'Cocoa garden icon' },
  { label: 'Clove Distillation', icon: cloveDistillationIcon, alt: 'Clove distillation icon' },
  { label: 'Snakefruit Garden', icon: snakefruitGardenIcon, alt: 'Snakefruit garden icon' },
];

const experienceCards = [
  { label: 'Coffee Garden', image: coffeeGardenExperience, alt: 'Coffee garden activity in Ampelgading', href: '/experience/coffee-garden' },
  { label: 'Cocoa Garden', image: cocoaGardenExperience, alt: 'Cocoa garden harvest in Ampelgading', href: '/experience/cocoa-garden' },
  { label: 'Snakefruit Garden', image: snakefruitGardenExperience, alt: 'Visitors walking through a snakefruit garden', href: '/experience/snakefruit-garden' },
  { label: 'Clove Distilation', image: cloveDistillationExperience, alt: 'Clove distillation process in Ampelgading', href: '/experience/clove-distillation' },
];

const traditionItems = [
  'Tumpengan',
  'Make traditional cakes',
  'Ketupat & Coconut Leaf Craft',
  'Traditional coffee roaster',
  'Drink Coffee in the Garden',
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#F5EBC7] text-[#4F602C]">
      <Navbar />
      <main>
        <section className="relative flex h-[520px] items-center justify-center overflow-hidden text-center sm:h-[620px] lg:h-[723px]">
          <img src={heroExperience} alt="Tourists exploring Ampelgading experience" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#242D17]/58" />
          <div className="relative z-10 mx-auto max-w-[1100px] px-5 text-[#FFFFFF]">
            <p className="font-earthtone text-[28px] font-[400] sm:text-[32px] lg:text-[36px]">Explore Ampelgading</p>
            <h1 className="font-earthtone mt-5 text-[42px] leading-[1.08] font-bold sm:text-[64px] lg:text-[92px]">
              Where Nature Meets
              <br />
              Local Life
            </h1>
          </div>
        </section>

        <section className="bg-[#F5EBC7] px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-[1340px]">
            <h2 className="font-editorial text-center text-[42px] font-medium text-[#685A31] md:text-[52px] lg:text-[64px]">The Growing Process</h2>

            <div className="mx-auto mt-20 grid max-w-[1280px] grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-4 lg:mt-24">
              {processItems.map((item) => (
                <div key={item.label} className="text-center text-[#8F8D43]">
                  <img src={item.icon} alt={item.alt} className="mx-auto h-[112px] w-[112px] object-contain md:h-[132px] md:w-[132px] lg:h-[148px] lg:w-[148px]" />
                  <p className="mt-6 text-lg font-semibold text-[#8F8D43] md:text-[28px]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {experienceCards.map((card) => (
                <article key={card.label} className="bg-[#8F8D43]">
                  {card.href ? (
                    <a href={card.href} className="block cursor-pointer no-underline">
                      <img src={card.image} alt={card.alt} className="h-[360px] w-full object-cover md:h-[440px] lg:h-[520px]" />
                      <div className="px-7 py-5 text-center text-lg font-medium text-[#FFFFFF]">{card.label}</div>
                    </a>
                  ) : (
                    <>
                      <img src={card.image} alt={card.alt} className="h-[360px] w-full object-cover md:h-[440px] lg:h-[520px]" />
                      <div className="px-7 py-5 text-center text-lg font-medium text-[#FFFFFF]">{card.label}</div>
                    </>
                  )}
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="bg-[#F5EBC7] px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="mx-auto grid max-w-[1340px] gap-10 lg:grid-cols-2 lg:items-center">
            <img src={tumpangExperience} alt="Visitor holding traditional food on banana leaf" className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[620px]" />
            <div>
              <h2 className="font-editorial text-[34px] leading-tight font-medium text-[#685A31] sm:text-[40px] lg:text-[48px]">
                Taste traditions shaped by the land and generations of local living.
              </h2>
              <ul className="mt-8">
                {traditionItems.map((item) => (
                  <li key={item} className="border-b border-[#8F8D43]/35 py-4 text-lg text-[#4F602C]">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/gastronomy"
                className="mt-10 inline-flex h-14 min-w-[190px] items-center justify-center bg-[#E17A33] px-8 text-base font-medium text-[#FFFFFF]"
              >
                Discover
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
