import { NavLink } from "react-router-dom";

const NavItem = () => {
    return <>
    <NavLink to={`/category/juegos`} className="navbar-item">Juegos de Mesa</NavLink>
    <NavLink to={`/category/libros`} className="navbar-item">Libros</NavLink>
    <NavLink to={`/category/snacks`} className="navbar-item">Snacks</NavLink>
</>
}

export default NavItem;