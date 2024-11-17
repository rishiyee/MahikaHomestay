import { About } from "./components/about";
import { Albums } from "./components/albums";
import { Amenties } from "./components/amenties";
import { ComfortSection } from "./components/comfort-section";
import { Contact } from "./components/contact";
import { Direction } from "./components/direction";
import { Discover } from "./components/discover";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ImageSection } from "./components/image-section";
import { Review } from "./components/reveiw";
import { RoomDetail } from "./components/room-detail";
import { SrollSection} from "./components/sroll-image";

function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <SrollSection/> 
      <About/>
      <ImageSection/>
      <Review/>
      <ComfortSection/>
      <Amenties/>
      <RoomDetail/>
      <Albums/>
      <Discover/>
      <Direction/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
