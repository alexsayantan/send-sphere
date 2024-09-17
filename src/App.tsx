import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";

// const navItems = [
//   { name: "Home", to: "/", isActive: true },
//   { name: "About", to: "/about", isActive: true },
//   { name: "Contact", to: "/contact", isActive: true },
// ];



function App() {
  return (
    <>
    {/* <Navbar items={navItems} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
