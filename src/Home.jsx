
import "./App.css";
// import Form from "./Sellerportal/Form";
import Aboutus from "./HomePage/Aboutus";
import Footer from "./HomePage/Footer";
import Maincontent from "./HomePage/Maincontent";
import Navbar from "./HomePage/Navbar";
// import Newcard from "./HomePage/Newcard";

function Home() {
  return (
    <div>
        <Navbar/>
        <Maincontent/>
        {/* <newcard/> */}
        <Aboutus/>
        <Footer/>

    </div>
  )
}

export default Home