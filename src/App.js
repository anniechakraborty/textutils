import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title={"TextUtils"} aboutText="About Us"/>
      <div className="container my-4">
        <TextForm heading="Enter text below to analyse" />
      </div>
    </>
  );
}

export default App;
