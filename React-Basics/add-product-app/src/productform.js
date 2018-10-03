import React, { Component } from 'react';

class ProductForm extends Component{
  constructor(props){
      super(props);
      this.state = {
          name: '',
          price: ''
      }
      this.submit = this.submit.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
  }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }

    handleChangePrice(event) {
        this.setState({price: event.target.value});
    }

    submit(e){
      e.preventDefault();
    
      this.setState({ name: this.state.name, price: parseInt(this.state.price) });
      var product = {
          name: this.state.name,
          price: this.state.price
      }
      console.log('product',product);
      this.props.handleCreate(product);
    
      this.setState({ name: '', price: '' });
  }
  
  render(){
    return(
      <form onSubmit={this.submit}>
        <input type="text" value={this.state.name} placeholder="Product Name" name="itemName" onChange={this.handleChangeName}/> -
        <input type="text" value={this.state.price} placeholder="Product Price" price="itemPrice" onChange={this.handleChangePrice}/>
        <br/><br/>
        <button>Add Product</button>
        <hr/>
      </form>
    );
  }
}

export default ProductForm