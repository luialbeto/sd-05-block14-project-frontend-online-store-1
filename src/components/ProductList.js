import React from 'react';

import * as Api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
    };
  }

  componentDidMount() {
    Api.getProductsFromCategoryAndQuery('', 'porta')
      .then((data) => {
        this.setState({
          categoryId: data.results[0].title,
          query: data.results[0].id,
        });
      });
  }

  render() {
    return (
      <div>{this.state.categoryId}</div>
    );
  }
}

export default ProductList;
