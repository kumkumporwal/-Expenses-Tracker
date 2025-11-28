import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Menu from "./components/menu";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import About from "./pages/About";
import Contact from "./components/Contact";
import Start from "./components/Start";
import CookbookSection from "./components/CookbookSection";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar shown on all pages */}
      <Nav />

      {/* Page Routes */}
      <Routes>
        {/* 👇 Default route (this shows Home when website loads) */}
        <Route path="/" element={<Home />} />

        {/* 👇 Clicking on “Home” in navbar also opens Home */}
        <Route path="/home" element={<Home />} />

        {/* 👇 Other routes */}
        <Route path="/About" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/start" element={<Start />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
