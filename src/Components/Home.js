import React from 'react';
import Customer from './Customer';
import Navbar from './Navbar';

const Home = ({ setArrayvaluer, userNum, result1, result2, result3 }) => {
  return (
    <div>
      <Customer setArrayvaluer={setArrayvaluer} userNum={userNum}
        result1={result1}
        result2={result2}
        result3={result3}
      ></Customer>
    </div>
  );
};

export default Home;