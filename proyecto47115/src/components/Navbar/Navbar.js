import "../Css/estilos.css"

import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'


function Navbar(){

    return(
       
       <div>

        <section className="header">
           
           <Link to={'/'}> <h1 className="titulo"> Polo  </h1> </Link>
            
            <CartWidget/>

        </section>




       <nav className="navbarHeader">
            
                   
            <ul className = "navbar">

            <NavLink to={`category/juegos`}/>
            <NavLink to={`category/libros`}/>   
            <NavLink to={`category/snacks`}/>   



            </ul>


        </nav>

        </div>
    )
}

export default Navbar