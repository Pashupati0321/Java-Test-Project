import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  /* useEffect(() =>  {
    console.log("Component was mounted")
  }  , [])
    */

  /* useEffect(() =>  {

    const handleResize = () => {
    console.log("Window was resized")
  } 
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize',handleResize)
  }
 } , [])
    */

 //https://dummyjson.com/products/1

const [productId, setProductId] = useState('');
const [productData, setProductData] = useState(null);

useEffect(() =>  {
  if(productId){
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(response => response.json())
    .catch(error => console.log('Error fetching data:', error));
  }
  

}  , [productId])

const handleProductIdChange = event => {
  setProductId(event.target.value);
}
  return (
    
    <div className="App">
    <h1>Product Data</h1>
    <label htmlFor='productId'> Enter Product Id: </label>
    <input 
    type='text'
    id='productId'
    value={productId}
    onChange={handleProductIdChange}
    />

{productData ? (
    <div>
      <h2>Product Details</h2>
      <p> ID: {productData.id}</p>
      <p> Title: {productData.title}</p>
      <p> Price: {productData.price}</p>
    </div>
) : (
  <p>Enter a product Id to fetch data</p>
)
}
    </div>
  );
}

export default App;
