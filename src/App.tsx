import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ExperienceSection from './components/sections/ExperienceSection';
import HeroSection from './components/sections/HeroSection';
import JourneySection from './components/sections/JourneySection';
import ContactSection from './components/sections/ContactSection';
import StorySection from './components/sections/StorySection';
import CulturePage from './pages/CulturePage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import GastronomyPage from './pages/GastronomyPage';

function LandingPage() {
  return (
    <div className="bg-[#f5ebc7] text-[#4f602c]">
      <Navbar />
      <main>
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
  if (window.location.pathname === '/experience') {
    return <ExperiencePage />;
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
