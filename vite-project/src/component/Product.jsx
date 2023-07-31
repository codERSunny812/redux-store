import { useEffect, useState } from 'react'
import { URL } from '../constant';

const Product = () => {

    const [productDetail , setproductDetail]= useState([]);
    useEffect(()=>{
        getProductData();

    },[])

   async function getProductData(){
    const data = await fetch(URL);
    const dataValue=await data.json();
    // console.log(dataValue);
    setproductDetail(dataValue);
    }

   
  return (
    <div className='productsWrapper'>
      {
        // eslint-disable-next-line array-callback-return
        productDetail?.map((items)=>(
          <div className="card" key={items.id}>
            <img src={items.image} alt=""  />
           <h4>{items?.title}</h4>
           <h5>{items?.price}</h5>
           <button className='btn'>add to cart</button>
          </div>)
        ) 
      }

    </div>
  )
}

export default Product;