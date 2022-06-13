import React,{ createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  const addItem = (item, setCantidad) => {
  console.log(setCantidad);
  console.log(item)
  console.log(item.id)

  
    const exist = cartList.find((cartItem) => cartItem.id === item.id);
    
    if (exist) {
      
      setCartList(

        cartList.map((cartItem) =>

          cartItem.id === item.id

            ? { ...cartItem, cantidad: cartItem.cantidad + setCantidad }

            : cartItem

        )

      );

    } else {

      setCartList([...cartList, { ...item, cantidad: setCantidad }]);

    }
      
};

  const removeItem = (id) => {

    setCartList(cartList.filter((item) => item.id !== id));
    //cartTemp.filter((product)=>product.id !==id);

  };

  const clear = () => {

    setCartList([]);
    // const $cartListJSON = JSON.stringify([]);      
    // sessionStorage.setItem('cartList', $cartListJSON)

  };

  return (

    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>

      {children}

    </CartContext.Provider>

  );

};

export default CartContextProvider;