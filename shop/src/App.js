import React, { Component } from 'react'
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Cart from "./components/Cart/Cart"
import products from './db/product.json'

export default class App extends Component {
state = {
  isCartOpen: false,
  order: [],
  productsList: products,
  total: 0,
}

// cartToogle(){
//   this.setState({isCartOpen: !this.state.isCartOpen})             //---> Если использовать обычную ф-ю
// }

cartToogle = () => {
  this.setState({isCartOpen: !this.state.isCartOpen})               //---> Если использовать острелочную ф-ю
}

addToCart = async(id) => {                                               // Для тотала нужна синхронность вреде
  console.log(id)
  const orderItem = this.state.order.find((el) => el.id === id)
  // ordertItem.quantity = 1

  const productItem = this.state.productsList.find(el => el.id === id)
  // this.setState({order: [orderItem]})                           //---> если история не важна
  await this.setState((prevState) => ({
    order: orderItem
     ? this.state.order.map((el) => 
      el.id === id ? {...el, quantity: el.quantity + 1} : el)
      : [...prevState.order, {...productItem, quantity: 1}],
  }))
    // order: [...prevState.order, productItem,]))
  console.log(this.state.order)
  if (this.state.order.length > 0) {
    this.total();
  }
}

total = () => {
  console.log('hello')
  const result = this.state.order.reduce(
    (sum, product) => {
    return sum + product.price}, 0)
    this.setState ({total: result.toFixed(2)});
}

  render() {
    return (
      <>
      <Header />
      <Main addToCart={this.addToCart}/>               
      <Cart 
      statusCart={this.state.isCartOpen}               //*Можно деструктуризировать
      cartToogle={this.cartToogle}
      total={this.state.total}
      order={this.state.order}/>                       {/*Если использовать острелочную ф-ю*/}
      {/* <Cart statusCart={this.state.isCartOpen} cartToogle={this.cartToogle.bind((this))}/>   //---> Если использовать обычную ф-ю */}

      {/* <Counter title="We test our counter"/> */}
    </>
    )
  }
}



// const App = () => {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Cart />
//       {/* <Counter title="We test our counter"/> */}
//     </>
//   );
// };


// export default App;

