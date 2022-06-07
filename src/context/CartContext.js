import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    // array de productos de compra
    const [cartList, setCartList]= useState([]);
    //console.log(cartList);//borrar luego.

    const addProduct = (product,qty)=>{
        let found = cartList.find(item=>item.id === product.id);
        
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: product.id,
                    imgItem: product.img[0],
                    nameItem: product.title,
                    priceItem: product.price,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
        
    }
        
        //itemRepeat(item);

        // const findDuplicated = (found, cartList)=>{
        //     cartList.forEach(element=>{
        //         if(found.id===element.id);
        //         return element.quantity +=qty;
        //     });
        // }
        // found
        // ?findDuplicated(found, cartList)
        // :setCartList([...cartList,product])
    }

        //para verificar que el item no está en el carrito
    //     const itemRepeat=(item)=>{
    //     const found = cartList.find(elt=>elt.id === item.id);
    // }

        //elimina un 1 item del carrito
        const removeProduct= (id) =>{
        const result = cartList.filter(item => item.id !==id);
        setCartList(result);
    }

        //para vaciar por completo el carrito de 1 item del carrito
        const removeAllProducts=()=>{
        setCartList([]);
    }

    //const data = {setCartList,addProduct,removeProduct,removeAllProducts,itemRepeat };

    return (
        <>
        <CartContext.Provider value={{
            cartList,
            addProduct,
            removeProduct,
            removeAllProducts }}>
        {children}
        </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;
