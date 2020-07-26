import React from 'react';

import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
    };
  }

  componentDidMount() {
    api.getProductsFromCategoryAndQuery('', 'computador')
      .then((data) => {
        this.setState({
          categoryId: data.results[0].title,
          query: data.results[0].id,
        });
      });
  }

  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria
        </h1>
      </div>
    );
  }
}

export default ProductList;
