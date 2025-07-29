import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title = "TextUtils"/>
    <div className="container">
    <TextForm className="mt-3" heading="Enter text to analyze "/>
    </div>
    </>
  );
 
}

export default App;
