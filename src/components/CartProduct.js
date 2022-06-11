// import React from 'react'
import {useContext} from "react"
import {Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'
import {CartContext} from "../context/CartContext";

// Alert,
//, useState
const CartProduct = (key,img,title,price,qty) => {

    const {removeItem} =useContext(CartContext);

    //const list = useContext(CartContext);
    //const [alertOpen, setAlertOpen]= useState(false);
    
    // const deleted = () =>{
    //     removeItem(key)
    //     setAlertOpen(true)
    //     setTimeout(() =>{
    //         setAlertOpen(false)
    //     },3000)
    // }



    return (
    <>
    {/* <div>CartProduct</div> */}
    <Row>
                <Col sm="10" md="8" lg="6">
                <Card 
                    body
                    color="dark"
                    inverse
                    >
        
                    <CardHeader>
                        <CardTitle tag="h5">
                            
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardImg
                    alt={title}
                    src={img}
                    top
                    width="100%"
                    />
                    <Button onClick={removeItem(key)}>Remover producto</Button>
                    </Card>
                </Col>
                <Col sm="10" md="8" lg="6">
                    <Card 
                        body
                        color="dark"
                        inverse
                    >
        
                    <CardHeader>
                        <CardText>
                            {qty}
                        </CardText>
                    </CardHeader>
            <CardBody>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h5"
                >
                    ${price}
                </CardSubtitle>
                <CardText>
                    Stock de {qty} unidades.
                </CardText>
            </CardBody>
            <CardFooter>
            
                
            </CardFooter>
        </Card>
                {/* <Alert
                    color="info"
                    isOpen={alertOpen}
                    >
                        {`Se eliminó ${qty} productos del carrito`}
                </Alert> */}
    </Col>
</Row>

    
    </>
    )
}

export default CartProduct
