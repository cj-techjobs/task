import React from 'react';
import '../assest/maincss.css';
import './components.scss'

export const ImageText = () => {
  return (
   <div className='mainWrapper'>
    <div className='container'>
        <div className='imageWrap'>
           <div className='image'>
           <img src="https://assets.wfcdn.com/im/77657669/resize-h250-w530%5Ecompr-r85/1730/173003755/promo_banner_desktop.jpg" />
           </div>
           <div className='contextInfo'>
            <h3>Corporate gift cards</h3>
            <p>For employees and clients - motivate, congratulate, and show your appreciation.</p>
            <button className='btn-primary'>
            Start Here
            </button>
           </div>
        </div>
    </div>
   </div>
  )
}
