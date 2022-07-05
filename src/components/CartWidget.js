import { BsFillCartFill } from "react-icons/bs";
import {Button,Badge }from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import {CartContext} from "../context/CartContext";


//boton carrito de la navbar
const CartWidget = () =>{
    const list= useContext(CartContext);

    return(
        <>
            
            <Link to="/Cart">
            <Button 
                color="secondary"
            >   
                <BsFillCartFill style={{color: 'white', fontSize: '24px'}} />
                <Badge color="danger" pill >{list.calcItemsQty()}</Badge>

            </Button>
            </Link>     
            
        </>

    )
}

export default CartWidget;