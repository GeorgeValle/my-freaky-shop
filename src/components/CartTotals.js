
import {Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'
import React, {CartContext} from "../context/CartContext";
import {useContext/*, useState, useEffect*/} from "react"

const CartTotals =(createOrder)=>{

    const list = useContext(CartContext);

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
            Subtotal Ars ${list.calcSubTotal()}
        </CardSubtitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
        >
        IVA Ars {(list.calcTaxes()).toFixed(2)}
        </CardSubtitle>
        
        </CardBody>
        <CardFooter>
        <CardText>
        TOTAL Ars ${list.calcTotal()}
        </CardText>
        <Button onClick={createOrder} color="danger" outline>¡Checkout Ahora!</Button>
        </CardFooter>
    </Card>
</div>


    </>

    )
}

export default CartTotals