import React from 'react';
import { Link } from 'react-router-dom';

class ProductDisplay extends React.Component {
  constructor(props){
    super(props);
    this.transferToCart = this.transferToCart.bind(this)
  }
  transferToCart(event) {
    console.log(event.target)
    }
  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product" key={this.props.id}>
        <img src={thumbnail} alt={title} />
        <h4>{title}</h4>
        <p batata={id}>{id}</p>
        <p>{`R$ ${price}`}</p>
        <Link data-testid="product-detail-link" to={`/product/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

export default ProductDisplay;
