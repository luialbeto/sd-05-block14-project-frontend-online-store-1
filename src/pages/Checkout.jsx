import React, { Component } from 'react';

export default class Checkout extends Component {
  constructor(){
    super();
    this.state = {
      nome: 'Nome completo',
      email: 'Email',
      cpf: 'CPF',
      telefone: 'Telefone',
      cep: 'CEP',
      endereco: 'Endereço',
      preco: '',
      quantidade: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkoutNome = this.checkoutNome.bind(this);
    this.checkoutCpf = this.checkoutCpf.bind(this);
    this.checkoutEmail = this.checkoutEmail.bind(this);
    this.checkoutEndereco = this.checkoutEndereco.bind(this);
    this.checkoutCep = this.checkoutCep.bind(this);
    this.checkoutTelefone = this.checkoutTelefone.bind(this);
  }
  
  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }
  
  checkoutNome(nome, newValue1) {
    this.setState({ name: newValue1 });
  }
  
  checkoutEmail(email, newValue2) {
    this.setState({ email: newValue2 });
  }

  checkoutCpf(cpf, newValue3) {
    this.setState({ cpf: newValue3 });
  }

  checkoutTelefone(telefone, newValue4) {
    this.setState({ telefone: newValue4 });
  }

  checkoutCep(cep, newValue5) {
    this.setState({ cep: newValue5 });
  }

  checkoutEndereco(endereço, newValue6) {
    this.setState({ endereco: newValue6 });
  }

  render() {
    return (
      <div>
        <input
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          type="text"
          onChange={(event) => this.checkoutNome('nome', event.target.value)}>
        </input>
        <input
          data-testid="checkout-email"
          placeholder="email"
          type="email"
          onChange={(event) => this.checkoutNome('email', event.target.value)}>
        </input>
        <input
          data-testid="checkout-cpf"
          placeholder="CPF"
          type="number"
          onChange={(event) => this.checkoutCpf('cpf', event.target.value)}>
        </input>
        <input
          data-testid="checkout-phone"
          placeholder="telefone"
          type="number"
          onChange={(event) => this.checkoutTelefone('telefone', event.target.value)}>
        </input>
        <input
          data-testid="checkout-cep"
          placeholder="CEP"
          type="number"
          onChange={(event) => this.checkoutCep('cep', event.target.value)}>
        </input>
        <input
          data-testid="checkout-address"
          placeholder="endereço"
          type="text"
          onChange={(event) => this.checkoutEndereco('address', event.target.value)}>
        </input>
        <button onClick={(click) => this.handleSubmit('click', click.event.target)}>
          Finalize
        </button>
      </div>
    );
  }
}