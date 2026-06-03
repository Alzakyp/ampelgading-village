import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import heroAbout from '../assets/images/hero-ampelgading.png';
import aboutGroup from '../assets/images/about/about-group.png';
import aboutCooking from '../assets/images/about/about-cooking.png';
import paperTexture from '../assets/textures/texture.png';

const steps = ['Step In', 'Take Part', 'Feel It'];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5EBC7] text-[#4F602C]">
      <Navbar />
      <main>
        <section className="relative flex h-[500px] items-center justify-center overflow-hidden text-center sm:h-[580px] lg:h-[620px]">
          <img
            src={heroAbout}
            alt="Visitors exploring Ampelgading coffee plantation"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#404C22]/58" />
          <div className="relative z-10 mx-auto max-w-[980px] px-5 pt-16 text-[#F5EBC7]">
            <p className="font-earthtone text-[32px] leading-none font-[400] text-[#F5EBC7] sm:text-[40px] lg:text-[48px]">Ampelgading</p>
            <h1 className="font-earthtone mt-4 text-[46px] leading-[0.98] font-bold text-[#F5EBC7] sm:text-[70px] lg:text-[96px]">
              Experience the Journey
            </h1>
          </div>
        </section>

        <section className="bg-[#F5EBC7] pt-0 pb-20 lg:pb-28">
          <div className="w-full">
            <div className="grid overflow-hidden lg:grid-cols-2">
              <img
                src={aboutGroup}
                alt="Visitors and Ampelgading community taking a group photo"
                className="h-[460px] w-full object-cover object-center sm:h-[600px] lg:h-full"
              />
              <article className="flex min-h-[600px] flex-col justify-center bg-[#8F8D43] px-7 py-14 text-[#F5EBC7] sm:px-10 lg:px-20 xl:px-28">
                <h2 className="font-earthtone text-[23px] leading-[1.02] font-normal text-[#F5EBC7] sm:text-[29px] lg:text-[34px]">
                  Ampelgading
                  <br />
                  Tourism Village
                </h2>
                <div className="mt-7 space-y-5 text-[15px] leading-[1.65] sm:text-[16px]">
                  <p>
                    The experience in Ampelgading does not begin at the dining table alone. It grows from plantations that
                    have been cared for across generations, through processes carried out wholeheartedly by a community
                    that lives side by side with nature.
                  </p>
                  <p>
                    Here, visitors do not simply come to enjoy the harvest, but to walk through Ampelgading&apos;s
                    plantations, pick produce directly from the fields, witness how traditional dishes are prepared, and
                    even take part in the coffee roasting process that has become part of the community&apos;s everyday
                    life.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-0 grid overflow-hidden lg:grid-cols-2">
              <article className="flex min-h-[580px] flex-col justify-center bg-[#7D4C24] px-7 py-14 text-[#F5EBC7] sm:px-10 lg:px-20 xl:px-28">
                <div className="space-y-5 text-[15px] leading-[1.68] sm:text-[16px]">
                  <p>
                    Every dish, every aroma, and every process carries a story about a way of life shaped over time.
                    Tradition is not presented as a performance, but exists naturally within the activities that continue
                    to be practiced to this day.
                  </p>
                  <p>
                    Ampelgading is more than just a destination for tourism, it is a space to experience the journey of
                    flavor as a complete and meaningful experience. Through every encounter, visitors bring home not only
                    memories, but also new knowledge, skills, and perspectives that can be carried into their everyday
                    lives.
                  </p>
                </div>
              </article>
              <img
                src={aboutCooking}
                alt="Ampelgading cooking and food preparation activity"
                className="h-[460px] w-full object-cover object-center sm:h-[600px] lg:h-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#F5EBC7] px-5 pt-16 pb-32 sm:px-8 lg:px-10 lg:pt-20 lg:pb-40">
          <div className="mx-auto grid max-w-[1080px] gap-10 text-center text-[#8F8D43] sm:grid-cols-3 sm:gap-8">
            {steps.map((step) => (
              <p key={step} className="font-editorial text-[36px] leading-none font-medium sm:text-[40px] lg:text-[50px]">
                {step}
              </p>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#8F8D43] px-5 py-18 text-center text-[#F5EBC7] sm:px-8 lg:px-10 lg:py-20">
          <img
            src={paperTexture}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-55"
          />
          <div className="relative z-10 mx-auto max-w-[1380px]">
            <h2 className="font-editorial whitespace-nowrap text-[28px] leading-[1.03] font-medium min-[420px]:text-[34px] sm:text-[54px] lg:text-[64px] xl:text-[72px]">
              #Experience <span className="font-normal italic">the</span>
              Journey
            </h2>
            <p className="mx-auto mt-[54px] max-w-[920px] text-[18px] leading-[1.44] sm:text-[22px]">
              Land that shapes flavor. The misty slopes of Semeru where life moves at a slower rhythm. Robusta coffee,
              local harvests, and village dishes born through generations of process and tradition. A living culture that
              grows naturally through everyday life, not performance. A journey to experience how nature, people, and time
              shape the way of living in Ampelgading.
            </p>
            <p className="mt-9 text-[18px] leading-[1.44] font-semibold sm:text-[22px]">Ampelgading: where every process becomes a story.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
