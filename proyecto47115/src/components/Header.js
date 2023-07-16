import Navbar from "./Navbar";
import CartWidget from "./CartWidget";


function Header(){



    return(

        <div>

        <section className="header">
            <h1 className="titulo"> Polo  </h1>
            <CartWidget/>

        </section>
        
        <div>  
        <Navbar/>

        </div>

    </div>


    )
}

export default Header