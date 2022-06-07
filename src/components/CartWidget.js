import { BsFillCartFill } from "react-icons/bs";
import {Button,Badge,NavLink }from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useContext } from "react";
// import CartContext from "../context/CartContext";



const CartWidget = () =>{
    // const quantity =useContext(CartContext);

    return(
        <>
            <NavLink href="/Cart">
            <Button 
                color="secondary"
            >   
                <BsFillCartFill style={{color: 'white', fontSize: '24px'}} />
                <Badge color="danger" pill >4</Badge>

            </Button>     
            </NavLink>
        </>

    )
}

export default CartWidget;