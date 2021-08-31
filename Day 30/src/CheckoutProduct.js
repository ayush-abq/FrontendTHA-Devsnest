import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, }) {
        const [{ basket }, dispatch] = useStateValue();

        const removeFromBasket = () => {
         
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
        }

        return (
            <div className='checkoutProduct'>
                <img className='checkoutProductImage' src={image} />
                <div className='checkoutProductInfo'>
                    <p className='checkoutProductTitle'>{title}</p>
                    <p className="checkoutProductPrice">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>

            </div>
        )
    }

    export default CheckoutProduct;
