import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({
        categories: category
      });
    });
  }

  render() {
    return (
      <section>
        {this.state.categories.map((category) => (
          <div data-testid="category">
            {category.name};
          </div>
        ))};
      </section>
    );
  }
}

export default CategoryList;
