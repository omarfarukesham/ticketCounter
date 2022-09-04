import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Manager from './Components/Manager';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const [userNum, setUserNum] = useState(1)
  const [result1, setResult1] = useState([])
  const [result2, setResult2] = useState([])
  const [result3, setResult3] = useState([])
  var showdata = 0;
  const setArrayvaluer = (value, userNum) => {
    if (showdata == value) {
      return;
    } else {
      if (userNum == 1) {
        setResult1(value)
      }
      else if (userNum == 2) {
        setResult2(value)
      }
      else if (userNum == 3) {
        setResult3(value)
        return setUserNum(0);
      }
      setUserNum(userNum + 1)
      showdata = value;
    }


  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home setArrayvaluer={setArrayvaluer} userNum={userNum}
          result1={result1}
          result2={result2}
          result3={result3}
        ></Home>}></Route>
        <Route path='/manager' element={<Manager result1={result1} result2={result2} result3={result3}></Manager>}></Route>
      </Routes>
    </div>
  );
}

export default App;
