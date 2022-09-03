import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Manager from './Components/Manager';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/manager' element={<Manager></Manager>}></Route>
        </Routes>
    </div>
  );
}

export default App;
