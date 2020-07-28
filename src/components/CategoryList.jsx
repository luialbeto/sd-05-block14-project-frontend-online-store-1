import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      categories: [],
      categoryId: '',
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
  }

  handleCheck(event) {
    console.log(event.target.name)
    this.setState({ categoryId: event.target.name })
  }

  render() {
    const { categories, categoryId } = this.state
    return (
      <section className="categories-container">
        {categories.map((category) => (
          <form key={category.id}>
            <input
              type="checkbox"
              name={category.name}
              data-testid="category"
              defaultChecked={categoryId}
              onChange={this.handleCheck}
            />
            <label htmlFor="categories-list">{category.name}</label>
          </form>
        ))}
      </section>
    );
  }
}

export default CategoryList;
