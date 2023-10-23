import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#333';
      showAlert("Dark Mode has been enabled!", "success");
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled!", "success");
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
      <NavBar title={"TextUtils"} aboutText="About Us" mode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <TextForm heading="Enter text below to analyse" mode={darkMode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
