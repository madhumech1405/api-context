import  { useContext } from 'react'
import { CartContext } from '../ContextAPI/CartContext';
import SingleProduct from './SingleProduct';


export default function Home() 
{
  const {products}=useContext(CartContext);
  return (
    <div className='productContainer'>
      {products.map((product)=>(
      <SingleProduct key={product.id} product={product}/>))}
      
    </div>
  );
}
