import { BrowserRouter as Router } from "react-router-dom"; // Add this import
import Footer from "./layouts/Footer";
import LargeCarousel from "./components/LargeCarousel";
import ThreeShields from "./containers/ThreeShields";
import HorizontalCardContainer from "./containers/HorizontalCardContainer";
import Menu from "./layouts/Menu/Menu";
import CardCarouselContainer from "./containers/CardCarouselContainer";
import CardItemContainer from "./containers/CardItemContainer";
import ImageCarousel from "./components/SmallImagesCarousel";

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <div className="font-kufi">
        <Menu/>
        <LargeCarousel/>
        <ThreeShields/>
        <ImageCarousel/>
        <HorizontalCardContainer/>
        <CardCarouselContainer/>
        <CardItemContainer/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;