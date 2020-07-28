import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categories: [], categoryId: '', boxCheck: false };
    this.resetCategory = this.resetCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
  }

  resetCategory(event) {
    const { categoryId, boxCheck } = this.state;
    if (categoryId.length > 0 && boxCheck === true) {
      this.setState({
        categoryId: '',
        boxCheck: !boxCheck
      });
    } else {
      this.setState({
        categoryId: event.target.name,
        boxCheck: !boxCheck
      })
    }
  }

  render() {
    const { categories } = this.state
    return (
      <section className="categories-container">
        {categories.map((category) => (
          <form key={category.id}>
            <input
              type="checkbox"
              name={category.id}
              data-testid="category"
              onChange={() => this.props.handleChange(this.state.categoryId)}
              onClick={this.resetCategory}
            />
            <label htmlFor="categories-list">{category.name}</label>
          </form>
        ))}
      </section>
    );
  }
}

export default CategoryList;
