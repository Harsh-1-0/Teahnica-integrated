import "./App.css";
import Sponsor from "./components/Sponsor";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import ImageSlider from "./components/ImageSlider";
import Schedule from "./components/Schedule";
import Prizes from "./components/Prizes";
import Tracks from "./components/Tracks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Tracks/>
      <Prizes />
      <Sponsor />
      <ImageSlider />
      <Schedule />
    </div>
  );
}

export default App;
