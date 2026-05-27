import { storyImages, storyParagraphs } from '../../data/landingData';
import image3Asset from '../../assets/images/image-3.png';
import img0379Asset from '../../assets/images/img-0379.png';
import img0405Asset from '../../assets/images/img-0405.png';
import imgggAsset from '../../assets/images/imggg.png';
import img0274Asset from '../../assets/images/img-0274.png';
import img0460Asset from '../../assets/images/img-0460.png';

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
const imagePlatter = img0460Asset;

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

          <div className="xl:hidden">
            <div className="grid gap-7 md:grid-cols-2">
              {imageActivity ? (
                <figure className="group overflow-hidden md:mx-auto md:w-[420px]">
                  <img
                    src={imageActivity}
                    alt="Village activity scene with goat"
                    className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[420px]"
                  />
                </figure>
              ) : null}
              <p className="max-w-[560px] text-[18px] leading-[1.52] text-[#4f602c]">{storyParagraphs[2].text}</p>
              {imageFoodServing ? (
                <figure className="group overflow-hidden md:ml-auto md:w-[380px]">
                  <img
                    src={imageFoodServing}
                    alt="Traditional food serving plate"
                    className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[320px]"
                  />
                </figure>
              ) : null}
              {imageCommunal ? (
                <figure className="group overflow-hidden md:w-[430px]">
                  <img
                    src={imageCommunal}
                    alt="Communal dining in greenhouse setting"
                    className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[430px]"
                  />
                </figure>
              ) : null}
              {imagePlatter ? (
                <figure className="group overflow-hidden md:mx-auto md:w-[330px]">
                  <img
                    src={imagePlatter}
                    alt="Tumpeng and food platter"
                    className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[330px]"
                  />
                </figure>
              ) : null}
            </div>
          </div>

          <div className="relative hidden h-[1220px] xl:block">
            {imageActivity ? (
              <figure className="group absolute left-1/2 top-0 w-[420px] -translate-x-1/2 overflow-hidden">
                <img
                  src={imageActivity}
                  alt="Village activity scene with goat"
                  className="h-[420px] w-[420px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </figure>
            ) : null}
            <p className="absolute left-0 top-[420px] w-[560px] text-[20px] leading-[1.5] text-[#4f602c]">
              {storyParagraphs[2].text}
            </p>
            {imageFoodServing ? (
              <figure className="group absolute right-0 top-[430px] w-[380px] overflow-hidden">
                <img
                  src={imageFoodServing}
                  alt="Traditional food serving plate"
                  className="h-[320px] w-[380px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </figure>
            ) : null}
            {imageCommunal ? (
              <figure className="group absolute left-0 top-[760px] w-[430px] overflow-hidden">
                <img
                  src={imageCommunal}
                  alt="Communal dining in greenhouse setting"
                  className="h-[430px] w-[430px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </figure>
            ) : null}
            {imagePlatter ? (
              <figure className="group absolute left-[55%] top-[820px] w-[330px] overflow-hidden">
                <img
                  src={imagePlatter}
                  alt="Tumpeng and food platter"
                  className="h-[330px] w-[330px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </figure>
            ) : null}
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
