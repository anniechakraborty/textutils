import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const toggleMode = () => {
    if(darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#333';
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <NavBar title={"TextUtils"} aboutText="About Us" mode={darkMode} toggleMode={toggleMode}/>
      <div className="container my-4">
        <TextForm heading="Enter text below to analyse" mode={darkMode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
