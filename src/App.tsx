import CulturePage from './pages/CulturePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import ExperiencePage from './pages/ExperiencePage';
import GastronomyPage from './pages/GastronomyPage';

export default function App() {
  if (window.location.pathname === '/') {
    window.history.replaceState(null, '', '/about');
  }

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

  return <AboutPage />;
}
