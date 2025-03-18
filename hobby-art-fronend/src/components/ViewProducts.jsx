import React from 'react'
import { useParams } from 'react-router-dom';
import {useFetchProducts} from './customeHook/useFetchProducts';

const ViewProducts = () => {
  const {id} = useParams();
  const {items,loading} = useFetchProducts();

  if(loading){
    return <p>Loading...</p>
  }

  //find the item with the id
  const product = items.find((item)=> item.id.toString() === id)

  return (
    <div>
     {product.name}
    </div>
  )
}

export default ViewProducts