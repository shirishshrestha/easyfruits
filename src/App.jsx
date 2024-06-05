import { Footer, Header } from "./ui/layout";
import { HeroSection } from "./ui/section";
import ContactInfo from "./ui/section/ContactInfo";
import { Products } from "./ui/section/Products";

const App = () => {
  return (
    <>
      <ContactInfo />
      <main id="main_container" className="text-textColor">
        <section className="">
          <header>
            <Header />
          </header>
          <HeroSection />
        </section>
        <Products/>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default App;
