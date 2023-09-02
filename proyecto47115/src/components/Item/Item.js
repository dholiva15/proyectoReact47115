import { Link } from "react-router-dom"
import "./Item.css"

function Item({id, name, img, price, stock}){

    return(

        <div >
                <div >
                    <div >
                        <figure >
                            <img src={img} alt={name}/>
                        </figure>
                    </div>
                    <div >
                        <div >
                            <div >
                                <p >{name}</p>
                                <p >Precio:{price}</p>
                                <p >Stock Disponible:{stock}</p>
                            </div>
                        </div>
                            <Link to ={`/item/${id}`}>Ver Detalles</Link>
                        </div>
                </div>
        </div>
    )


    
}

export default Item