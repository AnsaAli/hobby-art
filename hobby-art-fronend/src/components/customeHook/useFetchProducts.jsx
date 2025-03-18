import React, { useEffect, useState } from 'react'

export const useFetchProducts = () => {
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async()=>{
          try {
            let result = await fetch("https://raw.githubusercontent.com/AnsaAli/art-data/refs/heads/main/artData.json");
            let data = await result.json();
            setItems(data)
          } catch (error) {
            console.error('Error while fetching: ', error)
          }finally{
            setLoading(false)
          }
        }
        fetchData();
    },[])
  return {items,loading}
}
