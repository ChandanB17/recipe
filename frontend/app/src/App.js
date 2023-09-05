import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './App.css';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Breakfast from './Pages/Breakfast';
import RecipeListPage from './Pages/RecipeListPage';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Breakfast' element={<Breakfast />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddRecipe" element={<RecipeListPage />} />
        </Routes>
        <Footer />
        </ScrollToTop>
      </Router>

    </div>
  );
}

export default App;