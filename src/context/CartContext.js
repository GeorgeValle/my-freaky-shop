import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  const addItem = (item, setCantidad) => {
console.log(setCantidad);
console.log(item)
console.log(item.id)

  
    const exist = cartList.find((cartItem) => cartItem.id === parseInt(item.id));
    
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

      //let $cartList =JSON.parse(sessionStorage.getItem('cartList'))
                 //let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];
                const $cartListJSON = JSON.stringify(cartList);      
                sessionStorage.setItem('cartList', $cartListJSON)

    }

  };

  const removeItem = (id) => {

    setCartList(cartList.filter((item) => item.id !== id));

  };

  const clear = () => {

    setCartList([]);

  };

  return (

    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>

      {children}

    </CartContext.Provider>

  );

};

export default CartContextProvider;