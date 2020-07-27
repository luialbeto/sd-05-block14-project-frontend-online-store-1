import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
          data-testid="query-input"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SearchBar;
