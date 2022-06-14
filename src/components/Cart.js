import { FcPaid } from "react-icons/fc";
import React, {CartContext} from "../context/CartContext";
import {useContext } from "react"
import CartProduct from "./CartProduct";
import {Button} from "reactstrap"
import { Link } from 'react-router-dom';
import CartTotals from "./CartTotals";



const Cart = () => {

    
    
    const { cartList } = useContext(CartContext);
    const list =useContext(CartContext);
    const { totalPrice } = useContext(CartContext);
    let subTotal = (totalPrice / 1.22).toFixed(2);
    // const [cartList,setCartList]= useState([]);
    


    // let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];
    // setCartList($cartList);
    
    return(
        <>
        <h1>Carro de compras</h1>;
        <Link to="/" style={{ Decoration: "none"}}><Button color="primary">Seguir Comprando</Button></Link>
        
        
        {    
            
            cartList.length ===0
            ?(<h2>Su carro esta vacio <FcPaid/></h2>)
            
            :(
                <Button color="danger" onClick={list.clear} >Remover todo</Button>,
                <CartTotals subtotal={subTotal} totalPrice={totalPrice}  ></CartTotals>,
            cartList.map((item) =><CartProduct key={item.id} img={item.img} title={item.title} price={item.price} qty={item.qty}/>)            
            )
        }

            
        </>
    );




}

export default Cart;