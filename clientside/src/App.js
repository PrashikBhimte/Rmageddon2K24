import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import Loader from './Components/loader/loader';

function App() {

  const [ loading, setLoading  ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, []);

  return (
    <Routes>
      <Route path='/' element={ loading ? <Loader /> : <HomePage /> }></Route>
    </Routes>
  );
}

export default App;
