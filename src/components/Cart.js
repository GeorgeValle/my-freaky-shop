import { FcPaid } from "react-icons/fc";
import React, {CartContext} from "../context/CartContext";
import {useContext } from "react"
import CartProduct from "./CartProduct";
import {Button,NavLink} from "reactstrap"



const Cart = () => {

    
    
    //const { cartList } = useContext(CartContext);
    const list =useContext(CartContext);
    // const [cartList,setCartList]= useState([]);
    


    // let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];
    // setCartList($cartList);
    
    return(
        <>
        <h1>Carro de compras</h1>;
        <NavLink href="/"><Button>Seguir Comprando</Button></NavLink>
        <Button onClick={list.clear} >Remover todo</Button>
        
        {    
            
            list.cartList.length ===0
            ?<h2>Su carro esta vacio <FcPaid/></h2>
            
            :list.cartList.map((item) =><CartProduct key={item.id} img={item.img} title={item.title} price={item.price} qty={item.qty}/>)            

        }

            
        </>
    );




}

export default Cart;