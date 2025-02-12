import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import PartitionCard from './components/PartionCard';
import PartitionCardImage from './assets/partioncard.jpg'; // Import your image
import CardContainer from './components/CardContainer';
import SplashCursor from './bits/SplashCarusel'
import QuoteContainer from './components/QuoteContainer';
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
     <SplashCursor />

      <Navbar/>
      <Header/>
      <CardContainer/>

      <PartitionCard 
            title={"Website Name"} 
          
            image={PartitionCardImage} 
          />
      <QuoteContainer/>
      <Footer/>
    </div>
  );
}

export default App;
