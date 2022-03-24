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
    <Home />
    <Routes>
       <Route element={<Home />} path='/home'/>
       <Route element={<Login/>} path='/login'/>
       <Route element={<Listings/>} path='/listings'/>
       <Route element={<About/>} path='/about'/>
       <Route element={<Bookings/>} path='/'/>
       <Route element={<Register/>} path='/register'/>
    </Routes>
    </>
  );
}

export default App;
