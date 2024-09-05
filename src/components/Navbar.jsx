import './navbar.css'
import logo from '../assets/aindhinai-logo.png'
import { getAPI } from '../api/services';
import { useDispatch,useSelector } from "react-redux";
import { setCart } from "../store/product/actions";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Navbar = () => {
    const { cart } = useSelector((state) => state.productReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getCartItem = async () =>{
        const cartItem = await getAPI("/cart");
        dispatch(setCart(cartItem?.data))
      }

    useEffect(()=>{
        getCartItem();
    },[])

  return (
    < >
        <nav className="nav flex flex-wrap justify-evenly">
            <div className="nav-logo" onClick={() => navigate('/home')}>
                <img src={logo} alt=''/>
            </div>
            <div className='nav-search'>
                <input className="h-12 px-4 nav-search" type="search" placeholder="Search" />
            </div>
            <div className='nav-menus'>
                <div className='nav-cart' onClick={() => navigate('/cart')}>
                <i className="fa-solid fa-basket-shopping"></i>
                <span>{cart?.length}</span>
                </div>
            </div>
        </nav>
    </>
  )
}

