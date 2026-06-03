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
      <Container className="relative z-10 max-w-[1020px]">
        <h2 className="font-editorial text-[46px] leading-[1.129] text-[#8f8d43] sm:text-[56px] lg:text-[64px]">
          #<span className="font-medium">Experience </span>
          <span className="italic font-normal">the </span>
          <span className="font-medium">Journey</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[988px] text-[18px] leading-[1.44] text-[#8F8D43] lg:text-[22px]">
          Land that shapes flavor. The misty slopes of Semeru where life moves at a slower rhythm. Robusta coffee,
          local harvests, and village dishes born through generations of process and tradition. A living culture that
          grows naturally through everyday life, not performance. A journey to experience how nature, people, and time
          shape the way of living in Ampelgading.
        </p>
        <p className="mt-8 font-editorial text-[30px] text-[#8F8D43]">Ampelgading: where every process becomes a story.</p>
      </Container>
    </section>
  );
}
