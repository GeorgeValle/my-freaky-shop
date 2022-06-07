//import React from 'react';
import ItemCount from './ItemCount';
import {Alert,NavLink,Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'
import React,{useState, useContext}from'react';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({product}) => {

    const list = useContext(CartContext);

    const [itemCount, setItemCount] =useState(0);

    const [alertOpen, setAlertOpen] = useState(false);

    const onAdd = (qty) => {
        
        setAlertOpen(true)
        setTimeout(() =>{
            setAlertOpen(false)
        },3000)
        setItemCount(qty);
        list.addProduct(product,qty);


    }
    
    const {img,price,title,description,stock}=product;
    
    return (
        <>
        
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
                    {description}
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
                    Stock de {stock} unidades.
                </CardText>
            </CardBody>
            <CardFooter>
                <Alert
                    color="info"
                    isOpen={alertOpen}
                    >
                        {`Has sumado ${itemCount} productos al carrito`}
                </Alert>
                {
                itemCount===0
                ?<ItemCount stock={stock}  onAdd={onAdd}/>
                :<NavLink href='/Cart'><Button color="danger" outline>Checkout</Button></NavLink>
                }
                
            </CardFooter>
        </Card>
    </Col>
</Row>
        
        </>
    )
}

export default ItemDetail