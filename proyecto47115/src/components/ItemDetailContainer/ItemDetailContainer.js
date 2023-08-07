import { useState, useEffect } from "react";
import { getProductsById } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

function ItemDetailContainer(){

    const[product, setProducts]= useState(null)
    const { itemId } = useParams()

      useEffect(()=>{
        getProductsById(itemId)
            .then(response=>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
      },[itemId])

      return(
        <div>

            <ItemDetail{...product}/>

        </div>
      )







}


export default ItemDetailContainer