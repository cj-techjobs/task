import { ProductCard } from "../components/ProductCard"
import '../components/productCard.css'
import PropTypes from 'prop-types';


export const Products = ({data}) => {
   
  return (
    <div className="container products">
        {data?.map((item, index)=>{
            return (
                 <div key={index}>
                    {<ProductCard data={item}/>}
                </div> 
            )
        })}
    </div>
  )
}
Products.propTypes = {
    data: PropTypes.any.isRequired,
  };