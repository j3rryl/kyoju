import { NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <header className="navbar-header">
        <h5>Kyoju Listings</h5>
    <nav className="navbar-links">
        <ul className="list-links">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='listings'>Listings</NavLink>
            </li>
            <li>
                <NavLink to='login'>Login</NavLink>
            </li>
            {/* <li>
                <NavLink to='/bookings'>Bookings</NavLink>
            </li> */}
            <li>
                <NavLink to='about'>About</NavLink>
            </li>
            
        </ul>
    </nav>
    <button className="contact-btn">Contact Us</button>

    </header>
    </>
  )
}

export default Navbar