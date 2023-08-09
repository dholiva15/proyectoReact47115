
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({id, name,img, price, stock, category, description}){


    return(


        <div className="itemDetail">
                <div>
                    <div >
                        <figure>
                            <img src={img} alt={name}/>
                        </figure>
                    </div>
                    <div >
                        <div>
                            <div>
                                <p >{name}</p>
                                <p >{description}</p>
                                <p >Categoria:{category}</p>
                                <p >Precio:{price}</p>
                                <p >Stock Disponible:{stock}</p>
                            </div>
                        </div>
                           <ItemCount initial={1} stock={stock} onAdd={(quantity)  => console.log("Cantidad agregada", quantity)}/>
                    </div>
                </div>
            </div>


    )

}

export default ItemDetail