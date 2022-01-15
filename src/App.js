import "./App.css"
import Landing from "./Pages/Landing/Landing";
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"
import Header from "./Components/Header/Header";
import ProductsContextProvider from "./Context/ProductsContextProvider";
import ShoppingCartModal from "./Components/Modal/ShoppingCartModal";
import ShoppingCartContext from "./Context/ShoppingCartContext";
import Footer from "./Components/Footer/Footer"
import { Routes, Route, Navigate } from "react-router-dom"
import Catalog from "./Pages/Catalog/Catalog"
import Delivery from "./Pages/Delivery/Delivery"
import About from "./Pages/About/About"
import Contacts from "./Pages/Contacts/Contacts"
import Details from "./Pages/Details/Details"


function App() {
  useEffect(() => {
    
    AOS.init({
      once: true
    })

  }, []);

  return (
    <ProductsContextProvider>
      <ShoppingCartContext>
        <ShoppingCartModal />
        <Header />
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/" element={< Navigate replace to="/home" />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/details/:id" element={<Details />} />


        </Routes>
        <Footer />
      </ShoppingCartContext>
    </ProductsContextProvider>
  );
}

export default App;
