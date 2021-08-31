import React from 'react'
import "./Home.css"
import banner from './banner.jpg'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="homeContainer">
                <img className="homeImage"
                    src={banner} alt="banner"
                />
                <div className="homeRow">
                    <Product 
                    id="1"
                    image="https://images.bewakoof.com/t320/monday-scooby-half-sleeve-t-shirt-men-s-printed-t-shirts-391486-1629712255.jpg" 
                    title='Wander Geometry Half Sleeve T-Shirt' 
                    price={299} 
                    />
                    <Product
                    id="2" 
                    image="https://images.bewakoof.com/t320/gyaan-half-sleeve-t-shirt-black-men-s-printed-t-shirts-310957-1621917950.jpg" 
                    title='Gyaan Half Sleeve T-Shirt' 
                    price={249} 
                    />
                    <Product 
                    id="3"
                    image="https://images.bewakoof.com/t320/freedom-feather-half-sleeve-t-shirt-black-men-s-printed-t-shirts-340007-1614941266.jpg" 
                    title='Freedom Feather Half Sleeve T-Shirt ' 
                    price={399} 
                    />

                </div>
                <div className="homeRow">
                    <Product 
                    id="4"
                    image="https://images.bewakoof.com/t320/chili-pepper-melange-half-sleeve-contrast-pocket-hoodie-t-shirt-men-s-plain-half-sleeve-melange-contrast-pocket-hoodie-t-shirt-351514-1628573155.jpg"
                    title='Chili Pepper Melange Contrast Pocket Hoodie T-shirt'
                    price={499}
                    />
                    <Product 
                    id="5"
                    image="https://images.bewakoof.com/t320/pop-hope-half-sleeve-t-shirt-black-men-s-printed-t-shirts-300994-1606020676.jpg"
                    title='Pop Hope Half Sleeve T-Shirt '
                    price={349}
                    />
                    <Product
                    id="6" 
                    image="https://images.bewakoof.com/t320/brown-plain-shorts-men-s-plain-cotton-casual-shorts-293199-1607432135.jpg"
                    title='Burnt Brown Mens Shorts '
                    price={749}
                    />

                </div>
            </div>

        </div>
    )
}

export default Home;
