import { decorations, heroData } from '../../data/landingData';

export default function HeroSection() {
  return (
    <section className="relative h-[520px] overflow-hidden md:h-[720px]">
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
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-[#4f602c]/25 to-[#4f602c]/90" />
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[1200px] px-5 pb-12 text-center text-[#fdfaeb] sm:px-8 lg:px-12 lg:pb-16">
        <p className="font-editorial text-3xl font-bold sm:text-4xl">{heroData.eyebrow}</p>
        <h1 className="font-editorial text-5xl leading-[0.95] font-normal tracking-tight sm:text-6xl md:text-8xl">
          {heroData.title}
        </h1>
      </div>
    </section>
  );
}
