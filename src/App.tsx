import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Recent from './components/Recent'
import All from './components/All'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [curmode, setCurmode] = useState("light");

  const toggleMode = () => {
    if (curmode === "light") {
      setCurmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setCurmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    <Navbar toggleMode={toggleMode} curmode={curmode} />
    <h1 style={{fontSize: '8.5rem', textAlign: 'center'}}>THE BLOG</h1>
    <Recent/>
    <All/>
    <Footer/>

    </>
  );
}

export default App;
