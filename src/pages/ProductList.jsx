import React from 'react';

import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import ProductDisplay from '../components/ProductDisplay';
import CartIcon from '../components/CartIcon';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(input) {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, input)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
      });
    this.setState({ query: input });
  }

  render() {
    return (
      <section className="products-container">
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <SearchBar onClick={this.handleClick} />
        <CartIcon />
        <div>
          { sessionStorage.getItem('items') && JSON.parse(sessionStorage.getItem('items'))
          .map((item) => <ProductDisplay id={item.id} product={item} />) }
        </div>
      </section>
    );
  }
}

export default ProductList;
