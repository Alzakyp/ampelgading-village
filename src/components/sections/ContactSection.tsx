import Button from '../ui/Button';
import Container from '../ui/Container';
import vectorContact from '../../assets/images/vector-contact.png';
import instagramIcon from '../../assets/icons/instagram-icon.svg';

export default function ContactSection() {
  return (
    <section className="bg-[#F5EBC7] text-[#4F602C]">
      <div className="relative overflow-hidden">

        <Container className="relative z-10 py-20 md:py-24 lg:py-28">
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-[620px]">
              <h1 className="font-editorial text-[46px] leading-[1.1] text-[#23120C] sm:text-[54px] lg:text-[64px]">Plan Your Visit</h1>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#685A31] sm:text-[18px]">
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

      <Container className="pb-14 md:pb-16">
        <div className="max-w-[620px]">
          <h2 className="font-editorial text-[38px] text-[#23120C] md:text-[46px]">Contact us</h2>
          <div className="mt-6 space-y-4 text-[17px] text-[#4F602C]">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#925D31] text-[#F5EBC7]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M20.5 3.5a11.2 11.2 0 0 0-17.8 13l-1.6 4.9 5.1-1.6A11.2 11.2 0 1 0 20.5 3.5ZM12 21a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3 .9.9-2.9-.2-.3A9.2 9.2 0 1 1 12 21Zm5.1-6.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.8.2-.9 1-1.1 1.2-.4.2-.7 0a7.5 7.5 0 0 1-2.2-1.4 8.5 8.5 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.8-1.9-1.1-2.5c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.2 1.2 3.4c.1.2 2.2 3.5 5.3 4.8.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4 0-.1-.3-.2-.6-.4Z" />
                </svg>
              </span>
              <p>08123253153 (Heri Mujiono)</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#925D31] text-[#F5EBC7]">
                <img src={instagramIcon} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
              <p>@ampelgading_village</p>
            </div>
          </div>
        </div>
      </Container>

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
          <Button href="/experience" className="bg-[#925D31] px-8 py-3 text-[#F5EBC7] hover:bg-[#A5412D]">
            Discover
          </Button>
        </Container>
      </div>
    </section>
  );
}
