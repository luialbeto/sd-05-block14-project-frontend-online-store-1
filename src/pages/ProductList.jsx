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
      boxCheck: false,
      cartProduct: [],
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.transferToCart = this.transferToCart.bind(this);
  }

  componentDidMount() {
    api.getProductsFromCategoryAndQuery(this.state.categoryId, this.state.query)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
      });
      // this.setState({cartProduct: JSON.parse(localStorage.getItem('inCart'))})
  }

  async handleClick(input) {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, input)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
      });
    this.setState({ query: input });
  }

  async handleChange(category) {
    const { boxCheck } = this.state;
    this.setState({ boxCheck: !boxCheck });
    if (!boxCheck) {
      this.setState({ categoryId: category });
    } else {
      this.setState({ categoryId: '' });
    }
  }
  
  async transferToCart(product) {
    await this.setState({cartProduct: [...this.state.cartProduct, product] })
    localStorage.setItem('inCart', JSON.stringify(this.state.cartProduct))
      // localStorage.setItem('inCart', JSON.stringify(this.state.product))
      // cartItem.push(JSON.parse(localStorage.getItem('inCart')))
      // localStorage.setItem('inCart', JSON.stringify(cartItem))
      console.log(this.state.cartProduct)
    }

  render() {
    return (
      <section>
        <CategoryList handleChange={this.handleChange} />
        <section className="products-container">
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <SearchBar onClick={this.handleClick} />
          <CartIcon />
          <div>
            { sessionStorage.getItem('items') && JSON.parse(sessionStorage.getItem('items'))
            .map((item) => <ProductDisplay clickCartAdd={this.transferToCart} key={item.id} id={item.id} product={item} />) }
          </div>
        </section>
      </section>
    );
  }
}

export default ProductList;
