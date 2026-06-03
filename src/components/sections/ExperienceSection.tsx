import img0460 from '../../assets/images/img-0460.png';
import { experienceWords } from '../../data/landingData';

const experienceText =
  'Ampelgading is more than just a destination for tourism, it is a space to experience the journey of flavor as a complete and meaningful experience. Through every encounter, visitors bring home not only memories, but also new knowledge, skills, and perspectives that can be carried into their everyday lives.';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#f5ebc7] px-5 pt-20 pb-24 sm:px-8 lg:px-10 lg:pb-40">
      <div className="mx-auto max-w-[1280px]">
        <img
          src={img0460}
          alt="Ampelgading community preparation activity"
          className="mx-auto block h-60 w-60 object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
        />

        <p className="mx-auto mt-14 max-w-[780px] text-center text-[18px] leading-[1.55] text-[#4f602c] lg:text-[20px]">
          {experienceText}
        </p>

        <div className="mx-auto mt-20 grid max-w-[1180px] gap-10 md:mt-[130px] md:grid-cols-3 md:gap-12">
          {experienceWords.map((word, index) => (
            <div key={word} className={`flex min-h-[120px] items-center justify-center ${index === 0 ? 'md:justify-start' : ''} ${index === 2 ? 'md:justify-end' : ''}`}>
              <span className="font-editorial text-[42px] leading-[1.129] font-medium text-[#8f8d43] md:text-[52px] lg:text-[64px]">
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
