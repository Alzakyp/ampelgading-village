import { storyImages, storyParagraphs } from '../../data/landingData';
import { decorations } from '../../data/landingData';
import image3Asset from '../../assets/images/image-3.png';
import img0379Asset from '../../assets/images/img-0379.png';
import img0405Asset from '../../assets/images/img-0405.png';
import imgggAsset from '../../assets/images/imggg.png';
import img0274Asset from '../../assets/images/img-0274.png';
import img0423Asset from '../../assets/images/img-0423.png';

const getImage = (id: string) => storyImages.find((item) => item.id === id)?.src;
const imageAssets = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const getAssetByFile = (filename: string) =>
  Object.entries(imageAssets).find(([path]) => path.endsWith(`/${filename}`))?.[1];

const imageTopCenter =
  getAssetByFile('color-grading-dua.png') ??
  getImage('grading-2');
const imageCoffeeLarge =
  image3Asset;
const imageHandPicking =
  img0379Asset;
const imageActivity = img0405Asset;
const imageFoodServing = imgggAsset;
const imageCommunal = img0274Asset;
const imagePlatter = img0423Asset;

export default function StorySection() {
  return (
    <section id="about" className="about-page relative overflow-hidden bg-[#f5ebc7] pb-[120px] pt-[96px] text-[#4f602c] lg:pt-[108px]">
      {decorations.vectorDecor ? (
        <img
          src={decorations.vectorDecor}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-48px] top-[140px] z-[1] hidden w-[316px] rotate-180 opacity-95 lg:block"
        />
      ) : null}

      {decorations.group727 ? (
        <img
          src={decorations.group727}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[300px] right-[24px] z-[1] hidden w-[336px] opacity-90 lg:block"
        />
      ) : null}

      <div className="about-collage relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="lg:hidden">
          <div className="space-y-6">
            {imageTopCenter ? <img src={imageTopCenter} alt="Farmer harvesting produce in Ampelgading" className="h-[300px] w-full object-cover" /> : null}
            <p className="text-[16px] leading-[1.55] text-[#8F8D43]">{storyParagraphs[0].text}</p>
            {imageCoffeeLarge ? <img src={imageCoffeeLarge} alt="Coffee beans and local harvest" className="h-[340px] w-full object-cover" /> : null}
            {imageHandPicking ? <img src={imageHandPicking} alt="Hands picking harvest in plantation" className="h-[280px] w-full object-cover" /> : null}
            <p className="text-[16px] leading-[1.55] text-[#8F8D43]">{storyParagraphs[1].text}</p>
            <img src={imageActivity} alt="Ampelgading village activity" className="h-[320px] w-full object-cover" />
            <p className="text-[16px] leading-[1.55] text-[#8F8D43]">{storyParagraphs[2].text}</p>
            <img src={imageFoodServing} alt="Traditional food tasting" className="h-[300px] w-full object-cover" />
            <img src={imageCommunal} alt="Communal dining experience" className="h-[340px] w-full object-cover" />
            <img src={imagePlatter} alt="Nasi kuning traditional dish" className="h-[300px] w-full object-cover" />
            <p className="pt-2 text-center text-[16px] leading-[1.6] text-[#8F8D43]">{storyParagraphs[3].text}</p>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative mx-auto h-[4500px] max-w-[1440px]">
            {imageTopCenter ? (
              <img src={imageTopCenter} alt="Farmer harvesting produce in Ampelgading" className="floating-image absolute left-[580px] top-[150px] h-[298px] w-[300px] object-cover" />
            ) : null}

            <p className="floating-text absolute left-[52px] top-[430px] w-[636px] text-[22px] leading-[1.25] text-[#8F8D43]">
              {storyParagraphs[0].text}
            </p>

            {imageCoffeeLarge ? (
              <img src={imageCoffeeLarge} alt="Coffee beans and local harvest" className="floating-image absolute left-[50px] top-[650px] h-[484px] w-[520px] object-cover" />
            ) : null}

            {imageHandPicking ? (
              <img src={imageHandPicking} alt="Hands picking harvest in plantation" className="floating-image absolute left-[893px] top-[700px] h-[298px] w-[300px] object-cover" />
            ) : null}

            <p className="floating-text absolute left-[642px] top-[930px] w-[748px] text-[22px] leading-[1.44] text-[#8F8D43]">
              {storyParagraphs[1].text}
            </p>

            <img src={imageActivity} alt="Ampelgading village activity" className="floating-image absolute left-[350px] top-[1380px] h-[479px] w-[637px] object-cover" />

            <p className="floating-text absolute left-[50px] top-[1980px] w-[686px] text-[22px] leading-[1.44] text-[#8F8D43]">
              {storyParagraphs[2].text}
            </p>

            <img src={imageFoodServing} alt="Traditional food tasting" className="floating-image absolute left-[1047px] top-[1970px] h-[336px] w-[336px] object-cover" />

            <img src={imageCommunal} alt="Communal dining experience" className="floating-image absolute left-[50px] top-[2500px] h-[426px] w-[426px] object-cover" />

            <img src={imagePlatter} alt="Nasi kuning traditional dish" className="floating-image absolute left-[746px] top-[2550px] h-[300px] w-[300px] object-cover" />

            <img src={imageTopCenter} alt="Local village cooking activity" className="floating-image absolute left-[540px] top-[3150px] h-[393px] w-[360px] object-cover" />

            <p className="floating-text absolute left-[226px] top-[3680px] w-[988px] text-center text-[22px] leading-[1.44] text-[#8F8D43]">
              {storyParagraphs[3].text}
            </p>
          </div>
        </div>
      </div>

      <div id="gastronomy" className="h-1" aria-hidden="true" />
      <div id="culture" className="h-1" aria-hidden="true" />
    </section>
  );
}
