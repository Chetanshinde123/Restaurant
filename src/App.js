import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Layout/Pages/About";
import Home from "./Layout/Pages/Home";
import Contact from "./Layout/Pages/Contact";
import Menu from "./Layout/Pages/Menu";
import Pagenotfound from "./Layout/Pages/Pagenotfound";
import { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Cart from "./Layout/Pages/Cart";

function App() {
 
  let [cart, setCart] = useState([]);
  let [warning, setWarning] = useState(false);

  const handleClick = menu => {
    let isPresent = false;
    cart.forEach(product => {
      if (menu.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
        console.log("Already added")
      }, 1000);

      return;
    }
    setCart([...cart,{...menu, amount:1}]); 
  };

  return (
    <div className="App">
      <Header size={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu handleClick={handleClick} />} />
        <Route path="/cart" element={ <Cart cart={cart} setCart={setCart}/> } />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
