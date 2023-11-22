import './App.css';
import Intro from './Components/Intro/Intro';
import Nav from './Components/navbar/Nav';
import HeroPage from './Components/heroPage/hero';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <Nav />
      <HeroPage />
      <Footer />
    </div>
  );
}

export default App;
