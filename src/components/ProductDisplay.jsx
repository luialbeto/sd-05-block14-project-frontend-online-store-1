import React from 'react';
// import CartButton from './CartButton';
import { Link } from 'react-router-dom';

// const cartItem = []

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    // this.transferToCart = this.transferToCart.bind(this)
    this.state = { product: this.props.product, inCart: [] };
  }

  // transferToCart(event) {
  //   this.setState({inCart: })
  //   localStorage.setItem('inCart', JSON.stringify(this.state.product))
  //   cartItem.push(JSON.parse(localStorage.getItem('inCart')))
  //   localStorage.setItem('inCart', JSON.stringify(cartItem))
  //   console.log(cartItem)
  // }

  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={title} />
        <h4>{title}</h4>
        <p>{id}</p>
        <p>{`R$ ${price}`}</p>
        {/* <CartButton
          buttonId={this.props.clickCartAdd(this.state.product)}
          data-testid="product-add-to-cart"
        /> */}
        <button onClick={() => this.props.clickCartAdd(this.state.product)}>botão</button>
        <Link data-testid="product-detail-link" to={`/product/${id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default ProductDisplay;
