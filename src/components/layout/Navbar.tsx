import { useEffect, useState } from 'react';
import { brandAssets, navItems } from '../../data/landingData';
import Container from '../ui/Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition ${isScrolled ? 'bg-[#f5ebc7]/95 shadow-sm backdrop-blur-sm' : 'bg-[#f5ebc7]'}`}
    >
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <a href="/about" className="inline-flex items-center" aria-label="Ampelgading about">
            {brandAssets.headerLogo ? (
              <img src={brandAssets.headerLogo} alt="Ampelgading logo" className="h-auto w-[140px]" />
            ) : (
              <span className="font-editorial text-3xl font-semibold text-[#4f602c]">Ampelgading</span>
            )}
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[#8f8d43] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
          <ul className="hidden items-center gap-8 text-sm font-medium text-[#8f8d43] md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:opacity-70">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`grid transition-all duration-300 md:hidden ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}
        >
          <ul className="overflow-hidden text-sm font-medium text-[#8f8d43]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="block py-2 transition hover:opacity-70" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}
