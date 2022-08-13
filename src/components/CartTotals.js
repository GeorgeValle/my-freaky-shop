import {Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'
import React, {CartContext} from "../context/CartContext";
import {useContext/*,useState*/} from "react"
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import db from '../utils/FirebaseConfig';
import {useNavigate} from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';


//muestra el resumen de compra y contiene 
// la lógica para crear una orden en la DB
const CartTotals =()=>{

    //para manejar el alert
    // const [alertOpen, setAlertOpen] = useState(false);
    // const [nOrden, setNOrden] = useState("");
    const navigate = useNavigate();
    const list = useContext(CartContext);
    const { cartList } = useContext(CartContext);
    
    // const renderAlert= (nOrder) =>{
    //     return<>
    //     <div className="bg-success text-light mt-2 mb-2">
    //                     {`Tu ID de la Orden es: ${nOrder}`}
    //             </div>
    //             <Button onClick={list.clear()} className="btn mt-2 mb-2 btn-success">Aceptar</Button>
    //             </>
    // }

    // const notify = (nOrden) => toast(`Tu ID de la Orden es: ${nOrden}`);


    const createOrder= ()=>{
        
        
        if(list.user===null){
            navigate("/Login");
        }else{
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
            total:list.calcTotal(),
        };

        const createOrderInFirestore = async()=>{
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef,order)
            return newOrderRef;
        }

        createOrderInFirestore()
        //.then(result=>alert("Your ID Order is: " + result.id))
        .then(result=>list.setNOrden(result.id),list.setAlertOpen(true))
        //.then(result=>notify(result.id))
        .catch(err => console.log(err));

        cartList.forEach(async item=>{
            const itemRef =doc(db, "products", item.id);
            await updateDoc(itemRef,{
                stock:increment(-item.qty)
            })
        });
        
        
        list.clear();

        }
        
        // setTimeout(() =>{
        //     list.setAlertOpen(false)
        // },4100)
        

    }


return (
    <>
    <div>
    <Card
        body
        color="dark"
        inverse
        
    > 
        
        <CardHeader>
        <CardTitle 
            tag="h5">
            Resumen de Compra
        </CardTitle>
        </CardHeader>
        <CardBody>
        
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
        >
            Subtotal Ars: ${list.calcSubTotal().toFixed(2)}
        </CardSubtitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
        >
        IVA Ars: ${(list.calcTaxes()).toFixed(2)}
        </CardSubtitle>
        
        </CardBody>
        <CardFooter>
        <CardText>
        TOTAL Ars: ${list.calcTotal().toFixed(2)}
        </CardText>
        
        {/* {
            alertOpen&&renderAlert(nOrden)
        } */}
        <Button onClick={createOrder} color="danger" outline>¡Checkout Ahora!</Button>
        </CardFooter>
    </Card>
</div>


    </>

    )
}

export default CartTotals