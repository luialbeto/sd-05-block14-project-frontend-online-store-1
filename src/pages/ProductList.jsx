import React from 'react';

import * as api from '../services/api';
import ProductDisplay from '../components/ProductDisplay';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categoryId: '',
      query: '',
    };
  }

  componentDidMount() {
    const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => {
        const productList = response.results.map((product) => {
          const selectedProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
          };
          return selectedProduct;
        });
        this.setState({ products: productList });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        <form>
          <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <input type="text" name="textInput" />
        </form>
        <ul>
          {products.map((product) => (
            <li>
              <ProductDisplay product={product} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ProductList;
