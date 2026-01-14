import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinPage from './pages/JoinPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsOverviewPage from './pages/EventsOverviewPage';
import SponsorsPage from './pages/SponsorsPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const sectionIds = ['home', 'about', 'events', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.4, 0.6],
        rootMargin: '-80px 0px -40%',
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [isHomePage]);

  useEffect(() => {
    if (location.pathname === '/') {
      const params = new URLSearchParams(location.search);
      const section = params.get('section');

      if (section) {
        const scrollToTarget = () => {
          const element = document.getElementById(section);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setActiveSection(section);
            params.delete('section');
            const newSearch = params.toString();
            const newUrl = newSearch ? `?${newSearch}` : location.pathname;
            window.history.replaceState(null, '', newUrl);
          }
        };

        const timer = window.setTimeout(scrollToTarget, 100);
        return () => window.clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Events />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/events" element={<EventsOverviewPage />} />
        <Route path="/nos-evenements-prevus" element={<EventsOverviewPage />} />
        <Route path="/events/:eventSlug" element={<EventDetailPage />} />
        <Route path="/events/sport-partage" element={<EventDetailPage />} />
        <Route path="/events/operation-nounours" element={<EventDetailPage />} />
        <Route path="/events/halloween-2025" element={<EventDetailPage />} />
        <Route path="/events/dejeuner-blanc-2025" element={<EventDetailPage />} />
        <Route path="/sport-partage" element={<Navigate to="/events/sport-partage" replace />} />
        <Route path="/operation-nounours" element={<Navigate to="/events/operation-nounours" replace />} />
        <Route path="/halloween-2025" element={<Navigate to="/events/halloween-2025" replace />} />
        <Route path="/dejeuner-blanc-2025" element={<Navigate to="/events/dejeuner-blanc-2025" replace />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/nos-sponsors" element={<SponsorsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:newsSlug" element={<NewsDetailPage />} />
        <Route path="/on-parle-de-nous" element={<NewsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/membres" element={<MembersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/nos-projets" element={<Navigate to="/?section=projects" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {isHomePage && <Footer />}
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
