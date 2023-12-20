// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Card from './Components/cards/Card';
// import Footer from './Components/footer/footer';
import HeroPage from './Components/heropage/HeroPage';
// import Indform from './Components/indform/indform';
import Spons from './Components/spons/Spons';

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={ <HeroPage /> }></Route>
    //   <Route path='/register' element={ <Indform /> }></Route>
    // </Routes>
    <div>
      <HeroPage />
      <Spons />
    </div>
  );
}

export default App;
