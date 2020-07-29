import React from 'react';
import { Link } from 'react-router-dom'
import Checkout from './Checkout';

class ShoppingCart extends React.Component {
    
  render() {
    const { nome, email, endereço, cep, cpf, telefone } = this.props;
    return (
      <div>
        <Link data-testid="checkout-products" to="checkout" />
        <form>
          {nome}
          {email}
          {telefone}
          {endereco}
          {cep}
          {cpf}
        </form>
      </div>
    )
  }
}

export default ShoppingCart;
