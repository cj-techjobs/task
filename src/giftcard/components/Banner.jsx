import React from 'react'
import './components.scss'
 const Banner = () => {
  return (
    <div className='g-Banner'>
        <div>
        <img className="mainBanner" alt="Shop gift cards" src="https://assets.wfcdn.com/im/40301919/resize-h500-w2880%5Ecompr-r85/1730/173006008/promo_banner_desktop.jpg" srcset="https://assets.wfcdn.com/im/40301919/resize-h500-w2880%5Ecompr-r85/1730/173006008/promo_banner_desktop.jpg 640w, https://assets.wfcdn.com/im/39798716/resize-h130-w750%5Ecompr-r85/1730/173006008/promo_banner_mobile.jpg 1w" sizes="(min-width: bp640) 2880, 750"></img>
        </div>
        <div className='giftTag'>
            <h3>Got a gift card?</h3>
            <button className='redemTag'>Redeem</button>
        </div>
    </div>
  )
}

export default Banner;