
import ItemCount from "../ItemCont/ItemCount"


function ItemDetail({id, name,img, price,stock, category, description}){


    return(


        <article>
        <header>
            <h2>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name}  className="ItemImg" />
        </picture>
        <section>
            <p>
                Categoria: ${category}
            </p>

            <p>
                Descripcion: {description}
            </p>
            <p>
                Precio: {price}
            </p>
        </section>

        <footer className="ItemFooter">
            
            <ItemCount initial={1} stock={stock} onAdd={(quantity)=>  console.log("cantidad agregada  , " , quantity)} />


        </footer>


    </article>


    )

}

export default ItemDetail