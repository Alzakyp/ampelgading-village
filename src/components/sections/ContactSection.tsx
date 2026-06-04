import Button from '../ui/Button';
import Container from '../ui/Container';
import vectorContact from '../../assets/images/vector-contact.png';

const googleMapsUrl = 'https://www.google.com/maps/place/Ampelgading+Tourism+Village/@-8.1952312,112.8345792,17z';

export default function ContactSection() {
  return (
    <section className="bg-[#F5EBC7] text-[#4F602C]">
      <div className="relative overflow-hidden">

        <Container className="relative z-10 py-20 md:py-24 lg:py-28">
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-[620px]">
              <h1 className="font-editorial text-[46px] leading-[1.1] text-[#8F8D43] sm:text-[54px] lg:text-[64px]">Plan Your Visit</h1>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#8F8D43] sm:text-[18px]">
                Discover the landscapes, traditions, and living culture of Ampelgading.
              </p>
            </div>

            <div className="pointer-events-none relative min-h-[240px] md:min-h-[280px] lg:min-h-[340px]">
              <img
                src={vectorContact}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-1/2 w-[240px] -translate-y-1/2 opacity-80 sm:w-[300px] md:w-[360px] lg:w-[500px] lg:opacity-95"
              />
            </div>
          </div>
        </Container>
      </div>


      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.2686722796589!2d112.83457916171179!3d-8.195231219613875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6170abe84672b%3A0x902f193e2b4c52c5!2sAmpelgading%20Tourism%20Village!5e0!3m2!1sid!2sid!4v1780236540951!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ampelgading Tourism Village Map"
          className="block h-[450px] w-full"
        />
      </div>

      <div className="bg-[#F5EBC7] py-14 md:py-16">
        <Container className="flex justify-center">
          <Button
            href={googleMapsUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="!bg-[#925D31] px-8 py-3 !text-[#F5EBC7] hover:!bg-[#A5412D]"
          >
            Discover
          </Button>
        </Container>
      </div>
    </section>
  );
}
