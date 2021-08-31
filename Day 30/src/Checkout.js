import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className=" bannerad ">
                <img
                    className="checkout__ad"
                    src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-sanya-and-rk-1626432621.png"
                    alt=""
                />
            </div>
            
            <div className="yourorder-subtotal">
                <div className="checkoutLeft">
                    <h2>Your Orders </h2>
                    <div className="checkoutTitle">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>

                <div className="checkoutRight">
                    <Subtotal />

                </div>
            </div>
        </div>

    )
}

export default Checkout;

