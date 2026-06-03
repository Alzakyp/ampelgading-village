import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ExperienceSection from './components/sections/ExperienceSection';
import HeroSection from './components/sections/HeroSection';
import JourneySection from './components/sections/JourneySection';
import ContactSection from './components/sections/ContactSection';
import StorySection from './components/sections/StorySection';
import CulturePage from './pages/CulturePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import ExperiencePage from './pages/ExperiencePage';
import GastronomyPage from './pages/GastronomyPage';

function LandingPage() {
  return (
    <div className="bg-[#f5ebc7] text-[#4f602c]">
      <Navbar />
      <main className="bg-[repeating-linear-gradient(to_right,#F5EBC7_0px,#F5EBC7_120px,#F7EDCF_120px,#F7EDCF_156px)]">
        <HeroSection />
        <StorySection />
        <ExperienceSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  if (window.location.pathname === '/about') {
    return <AboutPage />;
  }

  if (window.location.pathname === '/experience') {
    return <ExperiencePage />;
  }

  if (window.location.pathname === '/experience/coffee-garden') {
    return <ExperienceDetailPage slug="coffee-garden" />;
  }

  if (window.location.pathname === '/experience/cocoa-garden') {
    return <ExperienceDetailPage slug="cocoa-garden" />;
  }

  if (window.location.pathname === '/experience/clove-distillation') {
    return <ExperienceDetailPage slug="clove-distilation" />;
  }

  if (window.location.pathname === '/experience/clove-distilation') {
    return <ExperienceDetailPage slug="clove-distilation" />;
  }

  if (window.location.pathname === '/experience/snakefruit-garden') {
    return <ExperienceDetailPage slug="snakefruit-garden" />;
  }

  if (window.location.pathname === '/gastronomy') {
    return <GastronomyPage />;
  }

  if (window.location.pathname === '/culture') {
    return <CulturePage />;
  }

  if (window.location.pathname === '/contact') {
    return <ContactPage />;
  }

  return <LandingPage />;
}
