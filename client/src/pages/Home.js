import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home() {

    const [listOfProducts, setListOfProducts] = useState([]);

    function handleClick() {
      <Link to='/product/${value.id}'> Product is here</Link>
    }

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response)=> {
      setListOfProducts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfProducts.map( (value,key) => {
        return <div className="products" onClick={handleClick}> 
        <div className="name"> {value.name} </div> 
        <div className="body"> {value.description} </div> 
        <div className="price"> {value.price} </div>
        <div className="photo"> {value.photo} </div>
      </div>})}
    </div>
  )
}

export default Home
