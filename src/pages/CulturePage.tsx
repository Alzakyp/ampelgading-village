import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import cultureHero from '../assets/images/culture-hero.jpg';
import remoDance from '../assets/images/remo-dance.jpg';
import spiritualityImage from '../assets/images/color-grading-satu.png';

const remoText =
  'Remo Dance is part of the welcoming tradition in Ampelgading Tourism Village, performed as a gesture of respect and hospitality for visitors. Its dynamic and expressive movements reflect the spirit, warmth, and character of the local community. In certain moments, guests are also invited to join the dance, creating a more immersive and interactive cultural experience. More than just a performance, Tari Remo becomes a symbol of togetherness and a way for the people of Ampelgading to share their culture with every visitor.';

const spiritualityText =
  "The vihara in Ampelgading Tourism Village is part of the community's spiritual life, existing harmoniously alongside the village's culture and everyday activities. More than a place of worship, the vihara serves as a space for reflection, tranquility, and a symbol of the diversity preserved within the community. Its peaceful atmosphere, architectural details, and ongoing spiritual activities create a cultural experience that reflects the values of tolerance and harmony in the daily life of Ampelgading's people.";

function DanceSymbol() {
  return (
    <svg viewBox="0 0 420 260" aria-hidden="true" className="w-[260px] text-[#CDBB8D] opacity-85 md:w-[360px]">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7">
        <path d="M112 78 C92 114 86 158 74 204 M112 78 C134 122 144 160 154 204" />
        <path d="M86 130 C46 108 34 82 48 60 M136 128 C176 106 188 80 172 58" />
        <path d="M100 54 C100 40 112 30 126 34 C140 38 142 56 130 66 C116 78 100 68 100 54Z" />
        <path d="M210 70 C194 112 192 154 186 210 M210 70 C230 116 244 156 256 210" />
        <path d="M190 126 C152 98 148 70 166 48 M232 124 C274 98 278 70 260 48" />
        <path d="M202 46 C202 30 216 20 230 26 C246 34 244 54 230 64 C216 74 202 62 202 46Z" />
        <path d="M312 78 C290 120 284 158 272 206 M312 78 C334 122 344 160 354 206" />
        <path d="M288 132 C250 112 238 84 252 62 M336 130 C374 108 388 82 374 60" />
        <path d="M300 54 C300 40 312 30 326 34 C340 38 342 56 330 66 C316 78 300 68 300 54Z" />
      </g>
    </svg>
  );
}

interface CultureFeatureProps {
  title: string;
  text: string;
  image: string;
  alt: string;
}

function CultureFeature({ title, text, image, alt }: CultureFeatureProps) {
  return (
    <section className="bg-[#f5ebc7]">
      <div className="relative h-[460px] overflow-hidden md:h-[600px] lg:h-[820px]">
        <img src={image} alt={alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2c16]/60 via-transparent to-transparent" />
        <h2 className="font-editorial absolute left-6 bottom-7 text-[40px] leading-none font-medium text-[#fdfaeb] md:left-10 md:bottom-10 md:text-[54px] lg:left-14 lg:bottom-12 lg:text-[72px]">
          {title}
        </h2>
      </div>
      <div className="mx-auto max-w-[1180px] px-5 pt-12 pb-20 text-[14px] leading-[1.65] text-[#4f602c] sm:px-8 md:text-base lg:px-10 lg:pt-[90px] lg:pb-40">
        <p>{text}</p>
      </div>
    </section>
  );
}

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-[#f5ebc7] text-[#4f602c]">
      <Navbar />
      <main>
        <section className="relative flex h-[420px] items-center justify-center overflow-hidden text-center md:h-[560px] lg:h-[720px]">
          <img src={cultureHero} alt="Ampelgading cultural tradition" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#243915]/60" />
          <div className="relative z-10 mx-auto max-w-[900px] px-5 text-[#fdfaeb]">
            <p className="font-editorial text-[22px] font-semibold md:text-[32px]">Living Culture</p>
            <h1 className="font-editorial mt-5 text-4xl leading-[1.15] font-medium md:text-[60px]">
              Experience culture through tradition
            </h1>
          </div>
        </section>

        <section className="flex h-[260px] items-center justify-center bg-[#5b321f] md:h-[360px] lg:h-[520px]">
          <DanceSymbol />
        </section>

        <CultureFeature
          title="Remo Dance"
          image={remoDance}
          alt="Remo Dance cultural costume and tradition"
          text={remoText}
        />

        <CultureFeature
          title="Living Spirituality"
          image={spiritualityImage}
          alt="Spiritual life around Ampelgading village"
          text={spiritualityText}
        />
      </main>
      <Footer />
    </div>
  );
}
