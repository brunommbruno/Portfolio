import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import HomeJumbo from "./components/HomeJumbo";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeJumbo />
      <Skills />
    </div>
  );
}

export default App;
