import { decorations } from '../../data/landingData';
import Container from '../ui/Container';

export default function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-[#f5ebc7] py-20 text-center text-[#4f602c] lg:py-28">
      {decorations.vectorDecor ? (
        <img
          src={decorations.vectorDecor}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 z-0 w-[480px] max-w-[85%] -translate-x-1/2 opacity-10"
        />
      ) : null}
      <Container className="relative z-10 max-w-[980px]">
        <h2 className="font-editorial text-5xl leading-tight text-[#8f8d43] sm:text-6xl lg:text-7xl">
          #<span className="font-semibold">Experience</span>
          <span className="italic font-normal">the</span>
          <span className="font-semibold">Journey</span>
        </h2>
        <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed lg:text-lg">
          Land that shapes flavor. The misty slopes of Semeru where life moves at a slower rhythm. Robusta coffee,
          local harvests, and village dishes born through generations of process and tradition. A living culture that
          grows naturally through everyday life, not performance. A journey to experience how nature, people, and time
          shape the way of living in Ampelgading.
        </p>
        <p className="mt-8 font-editorial text-3xl">Ampelgading: where every process becomes a story.</p>
      </Container>
    </section>
  );
}
