import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import ContactSection from '../components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="bg-[#f5ebc7] text-[#4f602c]">
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
