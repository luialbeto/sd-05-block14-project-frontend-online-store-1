import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <section data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </section>
    );
  }
}

export default ShoppingCart;
