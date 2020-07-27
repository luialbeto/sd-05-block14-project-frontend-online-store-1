import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
  }

  render() {
    const allCategories = this.state.categories;
    return (
      <section className="categories-container">
        {allCategories.map((category) => (
          <form>
            <input
              type="checkbox"
              id="categories-list"
              name="categories-list"
              data-testid="category"
            />
            <label htmlFor="categories-list">{category.name}</label>
          </form>
        ))}
      </section>
    );
  }
}

export default CategoryList;
