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
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-black">
        <Navbar/>
        <IntroSection />
        <AboutSection/>
        <Grid/>
        <Projects/>
        <Approach/>
        <Certification/>
        <Contact/>
        {children}
      </body>
    </html>
  );
}
