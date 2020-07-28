import React from "react";
import * as api from '../services/api';

class ProductDetails extends React.Component {
  render() {
    console.log(JSON.parse(sessionStorage.getItem("items")).filter((item) => item.id === this.props.match.params.id));
    const item = JSON.parse(sessionStorage.getItem("items")).filter((item) => item.id === this.props.match.params.id)[0];

    return (
      <div data-testid="product-detail-name">
        {item.title}
      </div>
    );
  }
}

export default ProductDetails;
