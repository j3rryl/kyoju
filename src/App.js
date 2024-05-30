import { Route, Routes } from "react-router-dom";
import About from "./About";
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
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Listings />} path="/listings" />
        <Route element={<About />} path="/about" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
