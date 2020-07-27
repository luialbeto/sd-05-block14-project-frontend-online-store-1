import React from 'react';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import ListItem from '../components/ListItem';


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
    api.getProductsFromCategoryAndQuery('', 'computador')
      .then((data) => {
      this.setState({
        categoryId: data.results[0].title,
        query: data.results[0].id,
      });
    });
  }

  componentDidUpdate() {
    api.getProductsFromCategoryAndQuery(this.state.categoryId, this.state.query)
      .then((data) => {
        localStorage.setItem('items', JSON.stringify(data.results))
      })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    const { products } = this.state;
    return (
      <div>
      <SearchBar 
        onChange={this.handleChange}
      />
      {JSON.parse(localStorage.getItem('items'))
        .map(item => <div>{item.title}</div>)
      }
      </div>
    );
  }
}

export default ProductList;
