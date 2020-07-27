import React, { Component } from 'react'

export default class SearchBar extends Component {

  render() {
    return (
      <div>
        <form>
          <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <input type="text" name="textInput" onChange={this.props.onChange}/>
        </form>
      </div>
    );
  }
}
