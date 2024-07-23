import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Sellerportal/Form";
import Aboutus from "./HomePage/Aboutus";

import Footer from "./HomePage/Footer";
// import Maincontent from "./HomePage/Maincontent";
import Navbar from "./HomePage/Navbar";
// import newcard from "./HomePage/Newcard";
import Home from "./Home";
import Productcart from "./Marketplace/marketcard";
import Create from "./Sellerportal/Create";
import Contactus from "./Marketplace/Contactus";

// import Productcart from './Marketplace/Productcart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="Navbar" element={<Navbar />} />
       {/* <Route path="/newcard" element={<newcard/>}/> */}
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Marketplace" element={<Productcart/>}/>
       <Route path="/create" element={<Create />} />
       <Route path="/Contactus" element={<Contactus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
