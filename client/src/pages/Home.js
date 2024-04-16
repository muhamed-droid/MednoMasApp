import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {

    const [listOfProducts, setListOfProducts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response)=> {
      setListOfProducts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfProducts.map( (value,key) => {return <div className="products"> 
        <div className="name"> {value.name} </div> 
        <div className="body"> {value.description} </div> 
        <div className="price"> {value.price} </div>
        <div className="photo"> {value.photo} </div>
      </div>})}
    </div>
  )
}

export default Home
