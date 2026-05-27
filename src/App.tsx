import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ExperienceSection from './components/sections/ExperienceSection';
import HeroSection from './components/sections/HeroSection';
import JourneySection from './components/sections/JourneySection';
import StorySection from './components/sections/StorySection';

export default function App() {
  return (
    <div className="bg-[#f5ebc7] text-[#4f602c]">
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <ExperienceSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}
