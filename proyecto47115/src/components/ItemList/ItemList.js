import Item from "../Item/Item"
import "./itemList.css"


function ItemList({products}){


    return(
        
        <div className="itemList">

            {products.map(prod=> <Item key={prod.id} {...prod}/>)}

        </div>
    )
}

export default ItemList