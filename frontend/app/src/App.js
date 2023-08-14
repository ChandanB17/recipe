import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './App.css';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;