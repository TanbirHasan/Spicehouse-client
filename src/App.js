
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Imggallery from './components/Imggallery/Imggallery';
import MiddleSection from './components/MiddleSection/MiddleSection';

function App() {
  return (
    <div className="App">
   <Header/>
   <Banner />
   <MiddleSection/>
   <Imggallery/>
   <Footer/>
    </div>
  );
}

export default App;
