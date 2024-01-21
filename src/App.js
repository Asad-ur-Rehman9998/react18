import { Routes,Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home"
import Contact from "./component/Contact"
import Products from "./component/Products";




function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
  
   </Routes>
   </>
  );
}

export default App;
