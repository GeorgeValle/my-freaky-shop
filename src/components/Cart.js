import { FcPaid } from "react-icons/fc";
import React, {CartContext} from "../context/CartContext";
import {useContext } from "react"
import CartProduct from "./CartProduct";
import {Button} from "reactstrap"
import { Link } from 'react-router-dom';
import CartTotals from "./CartTotals";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import db from '../utils/FirebaseConfig';


const Cart = () => {

    
    
    const { cartList } = useContext(CartContext);
    const list =useContext(CartContext);
    const { totalPrice } = useContext(CartContext);
    let subTotal = (totalPrice / 1.22).toFixed(2);
    // const [cartList,setCartList]= useState([]);
    
    // let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];
    // setCartList($cartList);

    const createOrder= ()=>{
        alert('createOrder');
        //array que se crea para dejar listo los items para la orden
        const itemsForDB= cartList.map(item=>({
            id:item.id,
            price: item.price,
            qty:item.qty,
            title: item.title
            

        }))
        let order={
            buyer:{
                email: "leo@messi.com",
                name: "leo Messi",
                phone: "02523543456"
            },
            date: serverTimestamp(),      
            items: itemsForDB,
            total:totalPrice(),
        };

        const createOrderInFirestore = async()=>{
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef,order)
            return newOrderRef;
        }

        createOrderInFirestore()
        .then(result=>alert("Your ID Order is: " + result.id))
        .catch(err => console.log(err));

        cartList.forEach(async item=>{
            const itemRef =doc(db, "products", item.id);
            await updateDoc(itemRef,{
                stock:increment(-item.qty)
            })
        });
        
        list.clear();

    }
    
    return(
        <>
        <h1>Carro de compras</h1>;
        <Link to="/" style={{ Decoration: "none"}}><Button color="primary">Seguir Comprando</Button></Link>
        
        
        {    
            
            cartList.length ===0
            ?(<h2>Su carro esta vacio <FcPaid/></h2>)
            
            :(
                <Button color="danger" onClick={list.clear} >Remover todo</Button>,
                <CartTotals subtotal={subTotal} totalPrice={totalPrice} createOrder={createOrder} ></CartTotals>,
            cartList.map((item) =><CartProduct key={item.id} img={item.img} title={item.title} price={item.price} cantidad={item.cantidad}/>)            
            )
        }

            
        </>
    );




}

export default Cart;