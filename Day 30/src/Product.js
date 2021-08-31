import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, image, title, price }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("this is the basket", basket);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
            },
        });
    };

    return (
        <div className="product">
            <img src={image} />
            <div className="productInfo">
                <p>{title}</p>
                <p className='productPrice'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            </div>


            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
