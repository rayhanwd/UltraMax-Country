import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h3>Cart Added : {cart.length}</h3>
        </div>
    );
};

export default Cart;