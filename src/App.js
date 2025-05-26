
import Footer from "./layouts/Footer";
import LargeCarousel from "./components/LargeCarousel"
import ThreeShields from "./containers/ThreeShields"
import HorizontalCardContainer from "./containers/HorizontalCardContainer"
import Menu from "./layouts/Menu/Menu"
import CardCarouselContainer from "./containers/CardCarouselContainer";
import CardItemContainer from "./containers/CardItemContainer";
import ImageCarousel from "./components/SmallImagesCarousel";
function App() {
  return (
    <div class="font-kufi">
      <Menu/>
      <LargeCarousel/>
      <ThreeShields/>
      <ImageCarousel/>
      <HorizontalCardContainer/>
      <CardCarouselContainer/>
      <CardItemContainer/>
      <Footer/>
    </div>
  );
}

export default App;
