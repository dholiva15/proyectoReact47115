import "../Css/Estilos.css"


function Navbar(){

    return(
       
       <div>
       <nav className="navbarHeader">
            <ul className = "navbar">

                <li >
                    <a> Home </a>
                </li>
                <li>
                    <a> Juegos de Mesa </a>
                </li>
                <li>
                    <a> Libros </a>
                </li>
                <li>
                    Snacks
                </li>


            </ul>


        </nav>

        </div>
    )
}

export default Navbar