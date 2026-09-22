// app/layout.tsx
import { Roboto_Slab } from 'next/font/google';
import './globals.css';
import AboutSection from '../app/components/AboutSection';
import IntroSection from './components/IntroSection';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Projects from './components/Projects';
import Approach from './components/Approach';
import Certification from './components/Certification';
import Contact from './components/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Naman Sharma — Full Stack Engineer',
  description: 'Portfolio of Naman Sharma, a full-stack software engineer specialising in React, Next.js, Node.js, and AI-integrated applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#ffffff] text-black ${robotoSlab.className}`}>
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
