import "../Css/estilos.css"

import CartWidget from "../CartWidget/CartWidget"
import {  Link } from 'react-router-dom'

import NavItem from "./NavItem"



function Navbar(){

    return(
       
       <div>

        <section className="header">
           
           <Link to={'/'}> <h1 className="titulo"> Polo  </h1> </Link>
            
            <CartWidget/>

        </section>




       <nav className="navbarHeader">

          <NavItem/>
            
            
        </nav>

        </div>
    )
}

export default Navbar