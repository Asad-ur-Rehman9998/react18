import axios from 'axios'
import React,{useState,useEffect} from 'react'

const SaleProducts = () => {
    const [products,setProducts]=useState([])

    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products?limit=3")
        setProducts(response.data)
    }

    useEffect(()=>{
        fetchProducts();
    })

  return (
    <div className='d-flex justify-content-evenly flex-wrap'>
      {
        products.map((item)=>{
            return(
                <div class="card" style={{width:"18rem"}}>
                <img src={item.image} class="card-img-top w-50 h-50" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.description}</p>
                  <a href="#" class="btn btn-primary">{item.price}</a>
                </div>
              </div> 
            )
        })
      }
    </div>
  )
}

export default SaleProducts
