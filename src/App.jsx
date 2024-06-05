import { Footer, Header } from "./ui/layout";
import ContactInfo from "./ui/section/ContactInfo";

const App = () => {
  return (
    <>
      <ContactInfo />
      <main id="main_container">
        <header>
          <Header />
        </header>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default App;
