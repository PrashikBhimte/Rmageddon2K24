import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import Loader from './Components/loader/loader';
import Come from './Components/comeing-soon/come';
import Soonpage from './Components/mainCome/Soonpage';


function App() {

  const [ loading, setLoading  ] = useState(true);  
  const targetDate = new Date(2024, 0, 8);

  const [shouldRenderMainPage, setShouldRenderMainPage] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    setShouldRenderMainPage(currentDate <= targetDate);
  }, []);

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Routes>
      <Route path='/' element={ shouldRenderMainPage? <Soonpage /> : loading ? <Loader /> : <HomePage /> }></Route>
      <Route path='/registre' element={ loading ? <Loader /> : <Come /> }></Route>
    </Routes>
  );
}

export default App;
