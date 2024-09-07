import React from 'react';
import '../assest/maincss.css';

const Cards = () => {
  return (
    <div className='cards_main_wrapper'>
        <div className='container'>
            <div className='cards'>
                <div className='card'>
                    <img src="https://assets.wfcdn.com/im/69144152/resize-h220-w405%5Ecompr-r85/1730/173006001/promo_banner_desktop.jpg" />
                </div>
                <div className='card'>
                    <img src="https://assets.wfcdn.com/im/10700696/resize-h220-w405%5Ecompr-r85/1730/173006023/promo_banner_desktop.jpg" />
                </div>
                <div className='card'>
                    <img src="https://assets.wfcdn.com/im/46210311/resize-h220-w405%5Ecompr-r85/1730/173006013/promo_banner_desktop.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;
