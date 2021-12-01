import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const CartWidget = () => {
    return (
        <div className="d-flex align-items-center">
            <AiOutlineShoppingCart className="display-4 shopping-cart position-relative"/>
                    <div className="shopping-cart-items d-flex justify-content-center align-items-center position-absolute rounded-circle bg-danger">
                        <span className="text-white pt-3 font-weight-bold h3"><p>2</p></span>
                    </div>
        </div>
    )
}

export default CartWidget
