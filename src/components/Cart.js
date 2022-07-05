import { FcPaid } from "react-icons/fc";
import React, {CartContext} from "../context/CartContext";
import {useContext/*, useState, useEffect*/} from "react"
//import CartProduct from "./CartProduct";
import {Button,Card,CardTitle/*,CardText,CardSubtitle,CardBody,CardFooter, Col, Row,CardHeader,CardImg*/} from "reactstrap"
import { Link } from 'react-router-dom';
import CartTotals from "./CartTotals";



const Cart = () => {

    const list = useContext(CartContext);
    //const { cartList } = useContext(CartContext);
    
    // const { cartList } = useContext(CartContext);
    // const list =useContext(CartContext);
    //const { totalPrice } = useContext(CartContext);
    //let subTotal = (totalPrice / 1.22).toFixed(2);



    
    //
    
    // let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];
    // setCartList($cartList);

    // const createOrder= ()=>{
    //     //alert('createOrder');
    //     //array que se crea para dejar listo los items para la orden
    //     const itemsForDB= cartList.map(item=>({
    //         id:item.id,
    //         price: item.price,
    //         qty:item.qty,
    //         title: item.title
            

    //     }))
    //     let order={
    //         buyer:{
    //             email: "leo@messi.com",
    //             name: "leo Messi",
    //             phone: "02523543456"
    //         },
    //         date: serverTimestamp(),      
    //         items: itemsForDB,
    //         total:list.calcTotal(),
    //     };

    //     const createOrderInFirestore = async()=>{
    //         const newOrderRef = doc(collection(db,"orders"));
    //         await setDoc(newOrderRef,order)
    //         return newOrderRef;
    //     }

    //     createOrderInFirestore()
    //     .then(result=>alert("Your ID Order is: " + result.id))
    //     .catch(err => console.log(err));

    //     cartList.forEach(async item=>{
    //         const itemRef =doc(db, "products", item.id);
    //         await updateDoc(itemRef,{
    //             stock:increment(-item.qty)
    //         })
    //     });
        
    //     list.clear();

    // }
    


    
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
            list.cartList.length > 0 && <CartTotals   ></CartTotals>
        }

{
        list.calcItemsQty !==0 && list.renderCartlist()
            
        }

        {
            list.cartList.length === 0 &&(<h2>Su carro esta vacio <FcPaid/></h2>)
        }

            
        </>
    );




}

export default Cart;