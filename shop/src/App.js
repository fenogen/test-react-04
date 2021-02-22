import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Cart from "./components/Cart/Cart";
import products from "./db/product.json";


const App = () => {
const [isCartOpen, setIsCartOpen] = useState(false);
const [order, setOrder] = useState([]);
const [productList, setProductList] = useState(products);

const cartToogle = () => {
    setIsCartOpen(!isCartOpen);
  };


  const addToCart = (id) => {
    const orderItem = order.find((el) => el.id === id);
    const productItem = productList.find((el) => el.id === id);

    if (orderItem) {
      const result = order.map((el) => {
      return el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      });
      setOrder(result);
    } else {
      setOrder ([...order, { ...productItem, quantity: 1 }])
  }}

  const removeFromCart = (id) => {
    const result = order.filter(el=> el.id !== id);
    setOrder(result);
  };


    const total = () => {
    const result = order.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
    return result;
  };

  return (
    <div>
      <Header />   
      <Main addToCart={addToCart} />
      <Cart
          statusCart={isCartOpen}
          cartToogle={cartToogle}
          removeFromCart={removeFromCart}
          order={order}
          total={total()}
        />
        </div>
  )
}


export default App;