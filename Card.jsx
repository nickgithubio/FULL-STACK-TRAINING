import React, { useEffect, useState } from "react";
import MyCard from "./MyCard";

function Card() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(data=>data.json())
        .then(res=>{
            
                setProducts(res.products)
                console.log(res);
        })

  },[])

  return (
    <div className="d-flex m-3 gap-3 flex-wrap">
      {products.map((item) => (
        <MyCard
          key={item.id}
          title={item.title}
          description={item.description}
          brand={item.brand}
          category={item.category}
          thumbnail={item.thumbnail}
          price={item.price}
          stock={item.stock}
        />
      ))}
    </div>
  );
}

export default Card;