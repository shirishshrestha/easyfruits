import { useRef } from "react";
import { Footer, Header } from "./ui/layout";
import {
  Dietician,
  FeaturedBlogs,
  HeroSection,
  Products,
  QualityAssurance,
} from "./ui/section";
import ContactInfo from "./ui/section/ContactInfo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const landingRef = useRef();
  const navbarRef = useRef();
  const heroRef = useRef();
  useGSAP(() => {
    landingRef.current = gsap
      .timeline()
      .from(navbarRef.current, {
        duration: 1,
        y: 100,
        delay: 0.23,
        opacity: 0,
        ease: "power2.out",
      })
      .from(heroRef.current, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
      });
  }, [{ scope: landingRef }]);
  return (
    <>
      <ContactInfo />
      <main className="text-textColor">
        <section ref={landingRef} id="main_container">
          <header>
            <Header navbarRef={navbarRef} />
          </header>
          <HeroSection heroRef={heroRef} />
        </section>
        <section id="main_container">
          <Products />
        </section>
        <section>
          <QualityAssurance />
        </section>
        <section id="main_container">
          <Dietician />
        </section>
        <section className="bg-[#f8f7f1]">
          <FeaturedBlogs />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default App;
