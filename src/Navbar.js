import { NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <header className="navbar-header">
        <h5>Kyoju Listings</h5>
    <nav className="navbar-links">
        <ul className="list-links">
            <li>
                <NavLink to='/kyoju'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/kyoju/listings'>Listings</NavLink>
            </li>
            <li>
                <NavLink to='/kyoju/login'>Login</NavLink>
            </li>
            {/* <li>
                <NavLink to='/'>Bookings</NavLink>
            </li> */}
            <li>
                <NavLink to='/kyoju/about'>About</NavLink>
            </li>
            
        </ul>
    </nav>
    <button className="contact-btn">Contact Us</button>

    </header>
    </>
  )
}

export default Navbar