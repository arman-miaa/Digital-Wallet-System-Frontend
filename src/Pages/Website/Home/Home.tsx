import CTA from "@/components/home/CtaSection";
import Features from "@/components/home/Features";

import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import RoleBased from "@/components/home/RoleBased";
import Security from "@/components/home/Security";
// import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";

import Navbar from "@/layout/Navbar";


const Home = () => {






  return (
    <div className="bg-background text-foreground min-h-screen ">
      <Navbar />

      <Hero />
      <Features />
      <HowItWorks />
      <RoleBased />
      <Security />
      {/* <Statistics /> */}
      <Testimonials />
      <CTA />
    
    </div>
  );
};

export default Home;
