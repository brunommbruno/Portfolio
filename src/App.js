import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import HomeJumbo from "./components/HomeJumbo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeJumbo />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
