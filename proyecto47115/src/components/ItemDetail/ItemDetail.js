
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({id, name,img, price, stock, category, description}){


    return(


        <div className="itemDetail">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={img} alt={name}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="nombre">{name}</p>
                                <p className="descripción">{description}</p>
                                <p className="categoria">Categoria:{category}</p>
                                <p className="precio">Precio:{price}</p>
                                <p className="stock">Stock Disponible:{stock}</p>
                            </div>
                        </div>
                           <ItemCount initial={1} stock={stock} onAdd={(quantity)  => console.log("Cantidad agregada", quantity)}/>
                    </div>
                </div>
            </div>


    )

}

export default ItemDetail