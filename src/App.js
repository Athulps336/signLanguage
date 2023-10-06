import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">     
      <Header/>
      
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
