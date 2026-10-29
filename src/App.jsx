import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import RouteMap from './components/RouteMap';
import IndustrialVisit from './components/IndustrialVisit';
import BaliExploration from './components/BaliExploration';
import Gallery from './components/Gallery';
import Video from './components/Video';
import Impressions from './components/Impressions';
import Members from './components/Members';
import Footer from './components/Footer';
import ThemeToggleFloating from './components/ThemeToggleFloating';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <RouteMap />
        <IndustrialVisit />
        <BaliExploration />
        <Gallery />
        <Video />
        <Impressions />
        <Members />
      </main>
      <Footer />
      <AudioPlayer />
      <ThemeToggleFloating />
    </ThemeProvider>
  );
}

export default App;
