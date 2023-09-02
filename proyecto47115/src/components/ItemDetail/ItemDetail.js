import { useState } from "react"
import { Link } from "react-router-dom"


import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({id, name,img, price, stock, category, description}){
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd= (quantity) => {
        setQuantityAdded(quantity)}



    return(


        <div>
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
                        {
                                quantityAdded > 0 ? (
                                    <Link to= '/cart'> Terminar compra </Link>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                                )
                            }


                           
                    </div>
                </div>
            </div>


    )

}



export default ItemDetail