import { brandAssets, contactItems, footerDescription, footerLinks } from '../../data/landingData';
import Container from '../ui/Container';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 19.5 5.8 15A8 8 0 1 1 9 18.2l-4.5 1.3Z" />
      <path d="M9.5 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.8l.5-.5c.2-.2.5-.2.7-.1l1.7.8c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7-.5.2-1 .3-1.5.3-3.3 0-7.1-3.7-7.1-7.1 0-.5.1-1 .3-1.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Footer() {
  const footerLogoNeedsLightFilter = brandAssets.footerLogo ? !brandAssets.footerLogo.toLowerCase().includes('white') : false;

  return (
    <footer id="contact" className="bg-[#E77B32] pt-14 pb-16 text-[#F5EBC7] sm:pt-16 lg:pt-20 lg:pb-14">
      <Container className="max-w-[1540px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.72fr_1fr] lg:gap-12 xl:gap-16">
          <div className="max-w-[390px]">
            {brandAssets.footerLogo ? (
              <img
                src={brandAssets.footerLogo}
                alt="Ampelgading logo"
                className={`h-auto w-[245px] max-w-full ${footerLogoNeedsLightFilter ? 'brightness-0 invert' : ''}`}
              />
            ) : (
              <p className="font-editorial text-[42px] font-medium">Ampelgading</p>
            )}
            <p className="mt-10 max-w-[340px] text-[20px] leading-[1.16] tracking-wide">{footerDescription}</p>
            <div className="mt-16 flex items-center gap-7">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5EBC7] text-[#E77B32] transition hover:opacity-80"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5EBC7] text-[#E77B32] transition hover:opacity-80"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[30px] leading-none font-medium tracking-wide sm:text-[32px]">Quick Access</h3>
            <ul className="mt-12 space-y-6 text-[21px] leading-none tracking-wide sm:text-[22px]">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:opacity-75">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l-2 lg:border-[#F5EBC7] lg:pl-12 xl:pl-16">
            <h3 className="text-[30px] leading-none font-medium tracking-wide sm:text-[32px]">Contact Us</h3>
            <ul className="mt-10 space-y-10 text-[21px] leading-[1.16] tracking-wide sm:text-[22px]">
              <li className="flex items-start gap-5">
                <LocationIcon />
                <span className="max-w-[250px]">{contactItems[0].label}</span>
              </li>
              <li className="flex items-start gap-5">
                <PhoneIcon />
                <span>{contactItems[1].label}</span>
              </li>
              <li className="flex items-start gap-5">
                <MailIcon />
                <span>{contactItems[2].label}</span>
              </li>
            </ul>
            <a
              href="/experience"
              className="mt-14 inline-flex h-[66px] w-full max-w-[230px] items-center justify-center bg-[#F5EBC7] text-[24px] font-medium tracking-wide text-[#E77B32] transition hover:opacity-85"
            >
              Discover
            </a>
          </div>
        </div>

        <div className="mt-20 h-0.5 w-full bg-[#F5EBC7]" />
      </Container>
    </footer>
  );
}
