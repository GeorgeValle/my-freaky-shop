import { FcPaid } from "react-icons/fc";
import {CartContext} from "../context/CartContext";
import {useContext } from "react"
import CartProduct from "./CartProduct";
import {Button,NavLink} from "reactstrap"



const Cart = () => {

    
    
    //const { cartList } = useContext(CartContext);
    const {clear} =useContext(CartContext);
    


    let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||console.log($cartList);
    
    return(
        <>
        <h1>Carro de compras</h1>;
        <NavLink href="/"><Button>Seguir Comprando</Button></NavLink>
        <Button onClick={clear} >Remover todo</Button>
        
        {    
            
            $cartList.length ===0
            ?<h2>Su carro esta vacio <FcPaid/></h2>
            
            :$cartList.map((item) =><CartProduct key={item.id} img={item.img} title={item.title} price={item.price} qty={item.qty}/>)            

        }

            
        </>
    );




}

export default Cart;