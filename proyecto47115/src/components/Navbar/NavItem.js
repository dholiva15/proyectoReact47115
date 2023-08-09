import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavItem = () => {
    return <>

    <div className="navbar"> 
    <NavLink to={`/category/juegos`} className="navbar-item">Juegos de Mesa</NavLink>
    <NavLink to={`/category/libros`} className="navbar-item">Libros</NavLink>
    <NavLink to={`/category/snacks`} className="navbar-item">Snacks</NavLink>
    
    </div>

</>
}

export default NavItem;