import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './App.css';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Breakfast from './Pages/Breakfast';
import Lunch from './Pages/Lunch';
import Dinner from './Pages/Dinner';
import RecipeListPage from './Pages/RecipeListPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Breakfast' element={<Breakfast/>}/>
        <Route path="/Lunch" element={<Lunch/>}/>
        <Route path="/Dinner" element={<Dinner/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/AddRecipe" element={<RecipeListPage/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;