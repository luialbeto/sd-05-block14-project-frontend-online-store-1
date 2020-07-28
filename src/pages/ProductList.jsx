import React from 'react';

import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import ProductDisplay from '../components/ProductDisplay';
import CartIcon from '../components/CartIcon';
import CategoryList from '../components/CategoryList';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleClick(input) {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, input)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
      });
    this.setState({ query: input });
  }

  async handleChange(category) {
    this.setState({ categoryId: category });
  }

  render() {
    return (
     <section>
        <CategoryList handleChange={this.handleChange}/>
        <section className="products-container">
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <SearchBar onClick={this.handleClick} />
          <CartIcon />
          <div>
            { sessionStorage.getItem('items') && JSON.parse(sessionStorage.getItem('items'))
            .map((item) => <ProductDisplay key={item.id} id={item.id} product={item} />) }
          </div>
        </section>
      </section>
    );
  }
}

export default ProductList;
