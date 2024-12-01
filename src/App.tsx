import { useEffect } from "react";
import {
  About,
  Albums,
  Amenties,
  Review,
  ComfortSection,
  Contact,
  Direction,
  Discover,
  Footer,
  GoogleReview,
  Header,
  HeroSection,
  ImageSection,
  RoomDetail,
  SrollSection,
  InstaPost,
  Gallery,
} from "./components";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

const Page = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.substring(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
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
    </div>
  );
};
