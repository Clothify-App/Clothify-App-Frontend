import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/Profile/Profile";
import VerticalNavbar from "./components/Profile/VerticalNavbar";
import Carousel from "./components/Home/Carousel/Carousel";
import Sections from "./components/Home/Sections/Sections";
import Navbar from "./components/Home/Navbar/Navbar";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import Footer from "./components/Home/Footer/Footer";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import MyProducts from "./components/Profile/MyProducts";
import Modal from "./components/Profile/Modal";
// import VerticalNavbar from "./components/Profile/VerticalNavbar";


function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  let isLoggedIn = false;
  return (
    <div className="App">
      {isLoggedIn ? (
        <Navbar isLoggedIn={isLoggedIn} />
      ) : (
        <Navbar setlogin={setLoginOpen} />
      )}
      {loginOpen ? <Login setlogin={setLoginOpen} /> : undefined}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Carousel />
              <Sections />
              <Footer />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About setlogin={setLoginOpen} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<VerticalNavbar />}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
