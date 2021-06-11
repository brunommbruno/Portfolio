import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import HomeJumbo from "./components/HomeJumbo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeJumbo />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
