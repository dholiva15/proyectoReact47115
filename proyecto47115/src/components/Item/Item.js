import {BrowserRouter, Link } from 'react-router-dom'

function Item(id,name,img, price,stock ){

    return(

        <article>
            <header>
                <h2>
                    {id.name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}  className="ItemImg" />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>

                <p>
                    Stock Disponible: {stock}
                </p>
            </section>

            <footer className="ItemFooter">
           

                <button to={`/item/${id}`} className='option' >Ver Detalle</button> 
           
        
            </footer>


        </article>
    )


    
}

export default Item