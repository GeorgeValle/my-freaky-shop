import React,{ createContext, useState, useEffect } from "react";
export const CartContext = createContext();



const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);
  const [addChange, setAddChange] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, setCantidad) => {
  console.log(setCantidad);
  console.log(item)
  console.log(item.id)

// }, 
    setAddChange(addChange + 1)
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
  
    
    console.log(cartList+"el cartList"); 
};


  const removeItem = (id) => {

    setAddChange(addChange + 1)
    const removed =cartList.filter((item) => item.id !== id)
    setCartList(removed);
    //cartTemp.filter((product)=>product.id !==id);

  };

  const clear = () => {

    setCartList([]);
    // const $cartListJSON = JSON.stringify([]);      
    // sessionStorage.setItem('cartList', $cartListJSON)

  };

  useEffect(()=>{
    let adding = 0;
    cartList.forEach(el => adding = adding + el.cantidad)
    setItemsTotal(adding)
}, [addChange,cartList])

useEffect(()=>{
    let addingPrice = 0;
    cartList.forEach(el => addingPrice = addingPrice + (el.cantidad * el.price))
    setTotalPrice(addingPrice)
}, [addChange,cartList])


  return (

    <CartContext.Provider value={{itemsTotal, totalPrice, cartList, addItem, removeItem, clear }}>

      {children}

    </CartContext.Provider>

  );

};

export default CartContextProvider;