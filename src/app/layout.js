// app/layout.tsx
import './globals.css';
import AboutSection from '../app/components/AboutSection';
import IntroSection from './components/IntroSection';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Grid from './components/Grid';
import Projects from './components/Projects';
import Approach from './components/Approach';
import Certification from './components/Certification';
import Contact from './components/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

export const metadata = {
  title: 'My Portfolio',
  description: 'Next.js Tailwind Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-black">
        <Navbar/>
        <div id="home">
          <IntroSection />
        </div>
        <div id="about">
          <AboutSection/>
          <Grid/>
        </div>
        <div id="projects">
          <Projects/>
          <Approach/>
        </div>
        <div id="certification">
          <Certification/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
        <ScrollToTop/>
        {children}
      </body>
    </html>
  );
}
