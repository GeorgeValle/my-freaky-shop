import { FcPaid } from "react-icons/fc";
import React, {CartContext} from "../context/CartContext";
import {useContext} from "react"
import {Button,Card,CardTitle} from "reactstrap"
import { Link } from 'react-router-dom';
import CartTotals from "./CartTotals";



const Cart = () => {

    const list = useContext(CartContext);
    
    


    
    return(
        <>
        <Card
            body
            color="dark"
            inverse>
        <CardTitle
            tag="h1"
            color="white"
            className="text-center"
        >
            <div>Carro de compras</div>
        </CardTitle>
        <Link to="/" style={{ Decoration: "none"}}><Button color="primary">Seguir Comprando</Button></Link>
        </Card>
        
        {    
            
            list.cartList.length > 0 &&
            <Card body color="dark" inverse>
            <Button color="danger" onClick={list.clear} >Remover todo</Button>
            </Card>
            
            
            
                
                    
        }

        {
            list.cartList.length > 0 && <CartTotals></CartTotals>
        }

        {
        list.calcItemsQty !==0 && list.renderCartlist() 
        }

        {
            list.cartList.length === 0 &&(<h2 className="text-white text-center m-4">Su carro  est&#225; vacio <FcPaid/></h2>)
        }

            
        </>
    );




}

export default Cart;