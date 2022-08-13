import { FcPaid } from "react-icons/fc";
import React, {CartContext} from "../context/CartContext";
import {useContext} from "react"
import {Button,Card,CardTitle} from "reactstrap"
import { Link } from 'react-router-dom';
import CartTotals from "./CartTotals";
import toast, { Toaster } from 'react-hot-toast';



const Cart = () => {

    const list = useContext(CartContext);


    
    const notify = (nOrden) =>{ toast.success(`Tu ID de la Orden es: ${nOrden}
                                se envió un email con los detalles `,{id: 'clipboard',duration: 8000,});}
    
    // const renderAlert= (Orden) =>{
    //     return<>
    //     <div className="bg-success text-light m-2">
    //                     {`Tu ID de la Orden es: ${Orden}`}
    //             </div>
    //             <Button onClick={list.setAlertOpen(false)} className="mt-2 mb-2 btn-success">Aceptar</Button>
    //             </>
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
            list.alertOpen===true&&  notify(list.nOrden) 
            
        }
            <><Toaster 
            
            position="top-center"
            reverseOrder={false}
        /> </>
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