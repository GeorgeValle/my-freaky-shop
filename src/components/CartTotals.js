import React from 'react';
import {Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'

const CartTotals =(subTotal, totalPrice)=>{


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
            Subtotal Ars ${subTotal}
        </CardSubtitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
        >
        IVA USD {(totalPrice - subTotal).toFixed(2)}
        </CardSubtitle>
        
        </CardBody>
        <CardFooter>
        <CardText>
        TOTAL Ars ${totalPrice}
        </CardText>
        
        </CardFooter>
    </Card>
</div>


    </>

    )
}

export default CartTotals