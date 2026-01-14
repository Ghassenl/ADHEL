import Contact from '../components/Contact';
import BackToHomeButton from '../components/BackToHomeButton';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHomeButton />
      </div>
      <Contact />
    </div>
  );
}

export default ContactPage;

