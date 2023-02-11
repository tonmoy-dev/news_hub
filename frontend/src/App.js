import './App.css';
import Banner from './components/Banner/Banner';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Banner />
      <Explore/>
      <Footer/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
