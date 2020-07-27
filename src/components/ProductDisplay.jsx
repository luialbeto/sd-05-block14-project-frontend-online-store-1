import React from 'react';

class ProductDisplay extends React.Component {
  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product" key={this.props.batatinha}>
        <img src={thumbnail} alt={title} />
        <h4>{title}</h4>
        <p>{id}</p>
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

export default ProductDisplay;
