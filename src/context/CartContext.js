import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    // array de productos de compra
    const [cartList, setCartList]= useState([]);
    //console.log(cartList);//borrar luego.

    const addProduct = (id,title,price,img,qty)=>{
        let found = cartList.find(item=>item.id === id);
        
    //     found === undefined 
    //         ?setCartList([
    //             ...cartList,
    //             {
    //                 id,
    //                 img,
    //                 title,
    //                 price,
    //                 qty
    //             }
    //         ])
            
    //         //aumento la cantidado
    //         :found.qty += qty;

    //         console.log(cartList)
        
    // }
        
        //itemRepeat(item);

        const findDuplicated = (found, cartList)=>{
            cartList.forEach(element=>{
                if(found.id===element.id);
                return element.quantity +=qty;
            });
       
        found
        ?findDuplicated(found, cartList)
        :setCartList([...cartList,id,title,price,img,qty])
        }
    }

        //para verificar que el item no está en el carrito
        const isInCart=(item)=>{
        const found = cartList.find(elt=>elt.id === item.id);
        console.log(found);
    }

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
            removeAllProducts,
            isInCart}}>
        {children}
        </CartContext.Provider>
        </>
    );
        }
    

export default CartContextProvider;
