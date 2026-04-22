import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ClientSlider from '../components/ClientSlider';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ClientSlider/>
      <WhyChoose />
       <Testimonials />
      <Contact />
    
      
      {/* <Process /> */}
      {/* <Portfolio /> */}
     
    </>
  );
}