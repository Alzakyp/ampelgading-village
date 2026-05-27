import { decorations, experienceWords } from '../../data/landingData';
import Container from '../ui/Container';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#f5ebc7] py-20 lg:py-28">
      {decorations.organicLarge ? (
        <img
          src={decorations.organicLarge}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-8 z-0 w-[70%] -translate-x-1/2 opacity-[0.14]"
        />
      ) : (
        <div
          className="pointer-events-none absolute left-1/2 top-8 z-0 h-40 w-[85%] -translate-x-1/2 rounded-[100%] border border-[#8f8d43]/20"
          aria-hidden="true"
        />
      )}
      <Container>
        <div className="relative z-10 flex flex-col gap-10 text-[#8f8d43] md:min-h-[240px] md:flex-row md:items-start md:justify-between">
          <h2 className="font-editorial text-5xl font-medium md:pt-4 md:text-6xl">{experienceWords[0]}</h2>
          <h2 className="font-editorial text-5xl font-medium md:self-center md:text-7xl">{experienceWords[1]}</h2>
          <h2 className="font-editorial text-5xl font-medium md:self-end md:text-6xl">{experienceWords[2]}</h2>
        </div>
      </Container>
    </section>
  );
}
