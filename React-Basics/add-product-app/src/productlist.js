import React, { Component } from 'react';
import Product from './product';
import ProductForm from './productform';
import Total from './total';

class ProductList extends Component{
  constructor(){
    super();
    this.state = {
      total: 0,
      productList: [
        { name: "Andriod" , price: 121 },
        { name: "Apple" , price: 123 },
        { name: "Nokia" , price: 65 }
      ]
    }
  }
  
  createProduct(product){
    this.setState({ productList: this.state.productList.concat(product) });
  }
  
  calculateTotal(price){
    this.setState({total: this.state.total + price});
  }
  
  showProduct(name){
    alert("You selected " + name);
  }

  render(){
    var component = this;
    var products = this.state.productList.map(function(product){
    return(
        <Product name={product.name} price={product.price}
        handleShow={component.showProduct}
        handleTotal={component.calculateTotal.bind(component)}/>
      );
    });
    
    return(
      <div>
        <ProductForm handleCreate={this.createProduct.bind(this)}/>
        {products}
        <Total total={this.state.total}/>
      </div>
    );
  }
};

export default ProductList