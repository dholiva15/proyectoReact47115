import { useState } from 'react'

import "./ItemCount.css"

function ItemCount({stock, initial, onAdd}){

    const[quantity, setQuantity] = useState(initial)
    
    const increment= ()=>{
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = ()=> {
        if(quantity > 1){
            setQuantity(quantity-1)

        }
    }

    

    return(
        <div className='counter'>

            <div className='controls'>
                <button className='button button1' onClick={decrement}> -  </button>
                <h4 className='numero'> {quantity}</h4>
                <button className='button button2' onClick={increment}> + </button>
            </div>

            <div>
                <button className='button' onClick={()=>onAdd(quantity)} disabled={!stock} >agregar al carro</button>
            </div>

        </div>
    )


}

export default ItemCount