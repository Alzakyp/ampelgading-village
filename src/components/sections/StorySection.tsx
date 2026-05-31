import { storyImages, storyParagraphs } from '../../data/landingData';
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
    <section id="about" className="relative overflow-hidden bg-[#f5ebc7] pb-[120px] pt-[96px] text-[#4f602c] lg:pt-[108px]">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[11%] top-[10%] z-0 hidden w-[80%] opacity-[0.2] lg:block"
        viewBox="0 0 1200 220"
        fill="none"
      >
        <path d="M20 170C210 30 420 30 610 140C780 240 980 220 1180 60" stroke="#C1B07C" strokeWidth="2" />
        <path d="M80 200C260 90 420 100 560 170" stroke="#C1B07C" strokeWidth="1.5" />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[1%] top-[10%] z-[1] hidden w-[300px] -scale-x-100 opacity-85 lg:block"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path d="M240 26C210 30 170 56 138 98C98 150 90 222 112 272C166 246 212 208 242 162C272 118 278 72 240 26Z" fill="#8F8D43" />
        <path d="M129 260C133 202 160 130 220 62" stroke="#f5ebc7" strokeOpacity="0.35" strokeWidth="3" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="space-y-12 lg:space-y-14">
          <div className="xl:hidden">
            <div className="grid gap-7 md:grid-cols-2">
              {imageTopCenter ? (
                <figure className="group overflow-hidden md:col-span-1 md:w-[320px]">
                  <img
                    src={imageTopCenter}
                    alt="Farmer harvesting produce in Ampelgading"
                    className="h-[320px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  />
                </figure>
              ) : null}
              <p className="text-[18px] leading-[1.52] text-[#4f602c] md:self-end">{storyParagraphs[0].text}</p>
              {imageCoffeeLarge ? (
                <figure className="group overflow-hidden md:w-[500px]">
                  <img
                    src={imageCoffeeLarge}
                    alt="Coffee beans and local harvest"
                    className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </figure>
              ) : null}
              <div className="space-y-6">
                {imageHandPicking ? (
                  <figure className="group overflow-hidden md:ml-auto md:w-[300px]">
                    <img
                      src={imageHandPicking}
                      alt="Hands picking harvest in plantation"
                      className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[300px]"
                    />
                  </figure>
                ) : null}
                <p className="max-w-[600px] text-[18px] leading-[1.52] text-[#4f602c]">{storyParagraphs[1].text}</p>
              </div>
            </div>
          </div>

          <div className="relative hidden h-[1140px] xl:block">
            {imageTopCenter ? (
              <figure className="group absolute left-1/2 top-0 w-[320px] -translate-x-1/2 overflow-hidden">
                <img
                  src={imageTopCenter}
                  alt="Farmer harvesting produce in Ampelgading"
                  className="h-[320px] w-[320px] object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                />
              </figure>
            ) : null}
            <p className="absolute left-0 top-[380px] w-[520px] text-[20px] leading-[1.5] text-[#4f602c]">
              {storyParagraphs[0].text}
            </p>
            {imageCoffeeLarge ? (
              <figure className="group absolute left-0 top-[600px] w-[520px] overflow-hidden">
                <img
                  src={imageCoffeeLarge}
                  alt="Coffee beans and local harvest"
                  className="h-[520px] w-[520px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </figure>
            ) : null}
            {imageHandPicking ? (
              <figure className="group absolute right-[170px] top-[440px] w-[300px] overflow-hidden">
                <img
                  src={imageHandPicking}
                  alt="Hands picking harvest in plantation"
                  className="h-[300px] w-[300px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </figure>
            ) : null}
            <p className="absolute right-0 top-[780px] w-[600px] text-[20px] leading-[1.5] text-[#4f602c]">
              {storyParagraphs[1].text}
            </p>
          </div>

          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-y-8 pt-10 pb-[100px] md:gap-y-10 xl:grid-cols-12 xl:items-start xl:gap-x-8 xl:gap-y-16">
            <figure className="group overflow-hidden xl:col-span-5 xl:col-start-5">
              <img
                src={imageActivity}
                alt="Ampelgading village activity"
                className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[380px]"
              />
            </figure>
            <p className="max-w-[620px] text-[18px] leading-[1.52] text-[#4f602c] xl:col-span-6 xl:col-start-1 xl:text-[20px]">
              {storyParagraphs[2].text}
            </p>
            <figure className="group overflow-hidden xl:col-span-3 xl:col-start-10">
              <img
                src={imageFoodServing}
                alt="Traditional food tasting"
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </figure>
            <figure className="group overflow-hidden xl:col-span-5 xl:col-start-1">
              <img
                src={imageCommunal}
                alt="Communal dining experience"
                className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[440px]"
              />
            </figure>
            <figure className="group overflow-hidden xl:col-span-4 xl:col-start-7">
              <img
                src={imagePlatter}
                alt="Nasi kuning traditional dish"
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[360px]"
              />
            </figure>
          </div>

          <p className="mx-auto max-w-[760px] text-center text-[18px] leading-[1.55] text-[#4f602c] xl:text-[20px]">
            {storyParagraphs[3].text}
          </p>
        </div>
      </div>

      <div id="gastronomy" className="h-1" aria-hidden="true" />
      <div id="culture" className="h-1" aria-hidden="true" />
    </section>
  );
}
