import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const product = JSON.parse(sessionStorage.getItem('items'))
    .filter((item) => item.id === this.props.match.params.id)[0];
    return (
      <div>
        <div data-testid="product-detail-name">
          <img src={product.thumbnail} alt={product.title} />
          <h1 data-testid="product-detail-add-to-cart">{product.title}</h1>
          <p>{product.id}</p>
        </div>
        <form>
          <textarea />
        </form>
      </div>
    );
  }
}

export default ProductDetails;
