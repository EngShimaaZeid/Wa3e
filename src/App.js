import { BrowserRouter as Router } from "react-router-dom"; // Add this import
import Menu from "./components/layouts/Menu/Menu";
import LargeCarousel from "./components/Home/LargeCarousel/LargeCarousel";
import WhatWeDo from "./components/Home/WhatWeDo/WhatWeDoContainer";
import RisksAndThreads from "./components/Home/RisksAndThreads/RisksAndThreads";
import Support from "./components/Home/Support/SupportContainer";
import Events from "./components/Home/Events/EventsContainer"
import QuickMenu from "./components/Home/QuickMenu/QuickMenuContainer";
import Footer from "./components/layouts/Footer";

//import HorizontalCardContainer from "./containers/HorizontalCardContainer";
//import CardCarouselContainer from "./containers/CardCarouselContainer";
//import CardItemContainer from "./containers/CardItemContainer";
//import ImageCarousel from "./components/SmallImagesCarousel";

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <div className="font-kufi">
        <Menu/>
        <LargeCarousel/>
        <WhatWeDo/>
        <RisksAndThreads/>
        <Support/>
        <Events/>
        <QuickMenu/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;