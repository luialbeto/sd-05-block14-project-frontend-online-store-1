import React from 'react';

export default function CartButton(props) {
  return (
    <div className="button-quantity">
      <button
        onClick={props.subtractQuantity}
        data-testid="shopping-cart-product-quantity"
      >-</button>
      <h4>{props.counter}</h4>
      <button
        onClick={props.addQuantity}
        data-testid="shopping-cart-product-quantity"
      >+</button>
    </div>
  );
}
