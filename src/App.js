import Navbar from "./Components/Navbar";
import Foot from "./Components/Foot"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Anime from "./Components/Anime";

export default function App() {
  return (
    <>
    <div>
    <div className="App">
      <Navbar />
      <Anime/>
      <Foot/>
      </div>
      </div>
    </>
  );
}
