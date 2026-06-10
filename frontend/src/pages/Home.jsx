import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import Platforms from "../components/home/Platforms";
import Workflow from "../components/home/Workflow";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/common/ChatWidget";

function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TrustedBy />
      <Stats />
      <Services />
      <Platforms />
      <Workflow />
      <WhyChooseUs />
      <Testimonials />
      <CTA/>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default Home;