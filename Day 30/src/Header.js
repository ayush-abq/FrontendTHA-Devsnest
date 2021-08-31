import React from 'react';
import logo from './logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
                <img className="headerLogo"
                    src={logo} alt="Logo"
                />
            </Link>

            <div className="headerSearch">
                <input className="headerSearchInput"
                    type="text" />
                <SearchIcon className="headerSearchIcon"
                />

            </div>

            <div className="headerNav">
                <Link to='/login'>
                    <div className="headerOption">
                        <span className="headerOptionLine1">Hello Guest</span>
                        <span className="headerOptionLine2">Sign In</span>
                    </div>
                </Link>

                <div className="headerOption">
                    <span className="headerOptionLine1">Returns</span>
                    <span className="headerOptionLine2">& Orders</span>
                </div>

                <Link to="/Checkout">
                    <div className="headerOptionYourCart">
                        <ShoppingBasketIcon />
                        <span className="headerOptionLine2 headerBasketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header;