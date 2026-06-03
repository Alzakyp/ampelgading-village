import { decorations, heroData } from '../../data/landingData';

export default function HeroSection() {
  return (
    <section className="relative h-[520px] overflow-hidden md:h-[620px] lg:h-[727px]">
      <img
        src={heroData.image}
        alt="Ampelgading hero landscape"
        className="h-full w-full object-cover object-center"
      />
      {decorations.organicLarge ? (
        <img
          src={decorations.organicLarge}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-8 z-10 w-[240px] opacity-15 md:w-[320px]"
        />
      ) : null}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#242D17]/15 via-[#242D17]/28 to-[#242D17]/62" />
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[1200px] px-5 pb-12 text-center text-[#FFFFFF] sm:px-8 lg:px-12 lg:pb-20">
        <p className="font-editorial text-[30px] font-medium sm:text-[34px] lg:text-[38px]">{heroData.eyebrow}</p>
        <h1 className="font-editorial text-[44px] leading-[0.98] font-medium tracking-tight sm:text-[56px] lg:text-[76px]">
          {heroData.title}
        </h1>
      </div>
    </section>
  );
}
