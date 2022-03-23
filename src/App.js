import { Route, Routes } from "react-router-dom";
import About from "./About";
import Bookings from "./Bookings";
import Home from "./Home";
import Listings from "./Listings";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route element={<Home />} path='/kyoju'/>
       <Route element={<Login/>} path='/kyoju/login'/>
       <Route element={<Listings/>} path='/kyoju/listings'/>
       <Route element={<About/>} path='/kyoju/about'/>
       <Route element={<Bookings/>} path='/kyoju/bookings'/>
       <Route element={<Register/>} path='/kyoju/login/register'/>
    </Routes>
    </>
  );
}

export default App;
