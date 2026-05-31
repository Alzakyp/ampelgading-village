import { brandAssets, contactItems, decorations, footerDescription, footerLinks, iconAssetsMap } from '../../data/landingData';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#E57B32] py-14 text-[#F5EBC7]">
      {decorations.organicFooter ? (
        <img
          src={decorations.organicFooter}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 bottom-0 z-0 w-[320px] opacity-20"
        />
      ) : null}
      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            {brandAssets.footerLogo ? (
              <img src={brandAssets.footerLogo} alt="Ampelgading logo" className="h-auto w-[150px]" />
            ) : (
              <p className="font-editorial text-3xl font-semibold">Ampelgading</p>
            )}
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{footerDescription}</p>
            <div className="mt-6 flex items-center gap-3">
              {iconAssetsMap.instagram ? (
                <a href="#" aria-label="Instagram" className="transition hover:opacity-75">
                  <img src={iconAssetsMap.instagram} alt="Instagram icon" className="h-5 w-5" />
                </a>
              ) : null}
              {iconAssetsMap.facebook ? (
                <a href="#" aria-label="Facebook" className="transition hover:opacity-75">
                  <img src={iconAssetsMap.facebook} alt="Facebook icon" className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Quick Access</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:opacity-75">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                {iconAssetsMap.location ? <img src={iconAssetsMap.location} alt="Location icon" className="mt-0.5 h-4 w-4" /> : <span>•</span>}
                <span>{contactItems[0].label}</span>
              </li>
              <li className="flex items-start gap-2">
                {iconAssetsMap.phone ? <img src={iconAssetsMap.phone} alt="Phone icon" className="mt-0.5 h-4 w-4" /> : <span>•</span>}
                <span>{contactItems[1].label}</span>
              </li>
              <li className="flex items-start gap-2">
                {iconAssetsMap.email ? <img src={iconAssetsMap.email} alt="Email icon" className="mt-0.5 h-4 w-4" /> : <span>•</span>}
                <span>{contactItems[2].label}</span>
              </li>
            </ul>
            <Button className="mt-6">Discover</Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
