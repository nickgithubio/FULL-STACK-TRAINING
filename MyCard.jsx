import React from 'react'

function MyCard(props) {

    let {title,description,category, price ,brand,thumbnail,stock}=props;
    
  return (
    <div>
      <div className="card" style={{width:"18rem", height:"35rem"}}>
  <img src={thumbnail} className="card-img-top " height={"200px"} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
   <div>
    <p>{price}</p>
    <p>{stock}</p>
    <p>{brand}</p>
    <p>{category}</p>

   
    
   </div>
   
  </div>
</div>
    </div>
  )
}

export default MyCard