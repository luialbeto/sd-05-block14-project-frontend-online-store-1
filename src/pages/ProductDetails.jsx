import React from 'react';

class ProductDetails extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        email: '',
        mensagem: '',
        rating: 0,
      }
      /* this.onHandleClick = this.onHandleClick.bind(this);
      this.onHandleChange = this.onHandleChange.bind(this);
      this.transferToCart = this.transferToCart.bind(this); */
    }
  
     transferToCart(event) {
      console.log(event.target)
    }
    
/*     onHandleClick(rating) {
      this.setState({ rating });
    }
  
    onHandleChange(event) {
      this.setState({ mensagem: event.target.value });
    }
  
    onHandleClean() {
      this.setState({ mensagem: '', rating: 0 });
    } */
  render() {
    const { email, mensagem, rating } = this.state;
    const product = JSON.parse(sessionStorage.getItem('items'))
    .filter((item) => item.id === this.props.match.params.id)[0];
    return (
      <div>
      <div data-testid="product-detail-name">
        {product.title}
      </div>
        <div>
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              onChange={(event) => this.onHandleChange(event.target.value)}
              placeholder="Submit"
              value={mensagem}
             />
          </div>
          <form onSubmit={this.submit}>
          <input
            id="email"
            type="email"
            onChange={(event) => this.setState(event.target.value)}
            value={email}
            />
            </form>
            <h1>
            <p>{rating}</p>
            </h1>
            <div>
             </div>
      </div>
    </div>
    );
  }
}

export default ProductDetails;
