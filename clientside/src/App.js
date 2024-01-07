import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import Loader from './Components/loader/loader';
import Come from './Components/comeing-soon/come';


function App() {

  const [ loading, setLoading  ] = useState(true);  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Routes>
      <Route path='/' element={ loading ? <Loader /> : <HomePage /> }></Route>
      <Route path='/registre' element={ loading ? <Loader /> : <Come /> }></Route>
    </Routes>
  );
}

export default App;
