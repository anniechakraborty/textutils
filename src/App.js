import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#333';
      showAlert("Dark Mode has been enabled!", "success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled!", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  const showAlert = (text, type) => {
    setAlert({
      alertText : text,
      type : type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <BrowserRouter>
      <NavBar title={"TextUtils"} aboutText="About" mode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-4">
      <Routes>
        <Route exact path="/about" element={<About mode={darkMode} />} />
        <Route exact path="/" element={
          <TextForm heading="Enter text below to analyse" mode={darkMode} showAlert={showAlert} />
        }/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
