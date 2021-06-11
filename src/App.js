import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import HomeJumbo from "./components/HomeJumbo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeJumbo />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
