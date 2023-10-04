import "./App.css";
import Sponser from "./components/Sponser";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/Tracks";
import Schedule from "./components/Schedule";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sponser />
      <ImageSlider />
      <Schedule />
    </div>
  );
}

export default App;
