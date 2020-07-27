import React, { Component } from 'react'

export default class CartButton extends Component {
  render() {
    return (
    <button onClick={this.props.buttonId}>Adicionar ao Carrinho</button>
    )
  }
}
