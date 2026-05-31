import img0460 from '../../assets/images/img-0460.png';
import { experienceWords } from '../../data/landingData';

const experienceText =
  'Ampelgading is more than just a destination for tourism, it is a space to experience the journey of flavor as a complete and meaningful experience. Through every encounter, visitors bring home not only memories, but also new knowledge, skills, and perspectives that can be carried into their everyday lives.';

const stepOutlines = [
  'M42 120 C25 80 60 48 112 42 C166 35 200 58 238 76 C288 100 334 92 328 130 C322 172 260 188 202 196 C132 206 64 190 42 120 Z',
  'M38 132 C58 70 126 48 190 62 C238 72 260 106 310 94 C364 82 400 120 378 164 C352 216 288 218 224 226 C146 236 86 212 54 178 C36 158 28 150 38 132 Z',
  'M34 112 C48 54 122 36 184 44 C244 52 272 90 320 96 C356 100 374 144 342 176 C306 212 236 212 182 202 C116 190 48 170 34 112 Z',
];

const stepTransforms = ['lg:-translate-y-3', 'lg:translate-y-3', 'lg:translate-y-5'];

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
            <div
              key={word}
              className={`relative flex min-h-[190px] items-center justify-center md:min-h-[220px] ${stepTransforms[index]}`}
            >
              <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible opacity-45"
                viewBox={index === 1 ? '0 0 420 240' : '0 0 360 220'}
                aria-hidden="true"
              >
                <path
                  d={stepOutlines[index]}
                  fill="none"
                  stroke="#C1B07C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                />
              </svg>
              <span className="font-editorial relative z-10 text-[42px] font-medium text-[#8f8d43] md:text-[48px] lg:text-[56px]">
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
