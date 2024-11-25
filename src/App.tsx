import { About } from "./components/about";
import { Albums } from "./components/albums";
import { Amenties } from "./components/amenties";
import { ComfortSection } from "./components/comfort-section";
import { Contact } from "./components/contact";
import { Direction } from "./components/direction";
import { Discover } from "./components/discover";
import { Footer } from "./components/footer";
import { GoogleReview } from "./components/ggogle-review";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ImageSection } from "./components/image-section";
import { InstaPost } from "./components/instagram-posts";
import { Review } from "./components/reveiw";
import { RoomDetail } from "./components/room-detail";
import { SrollSection } from "./components/sroll-image";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <SrollSection />
      <About />
      <ImageSection />
      <Review />
      <ComfortSection />
      <Amenties />
      <RoomDetail />
      <Albums />
      <Discover />
      <Direction />
      <InstaPost />
      <GoogleReview />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
