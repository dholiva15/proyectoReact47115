import Item from "../Item/Item"


function ItemList({products}){


    return(
        
        <div className="columns">

            {products.map(prod=> <Item key={prod.id} {...prod}/>)}

        </div>
    )
}

export default ItemList