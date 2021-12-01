import React from 'react'

import CartWidget from '../CartWidget/CartWidget';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import './NavBar.styles.css';

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div className="navBar">
                <div className="logo-container">
                    <img src="http://imgfz.com/i/9ZDci2a.jpeg" alt="Logo Brick Store" />
                    <h2>Brick Store</h2>
                </div>
            

                <ul className="menu-container">
                    <li className="menu-item"><a href="#">Productos</a></li>
                    <li className="menu-item"><a href="#">Ofertas</a></li>
                    <li className="menu-item"><a href="#">Sobre Nosotros</a></li>
                </ul>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar
