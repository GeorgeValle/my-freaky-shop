//import React from 'react';
import ItemCount from './ItemCount';
import {NavLink,Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'
import React,{useState, useContext}from'react';
import { CartContext } from '../context/CartContext';
//import { Link } from 'react-router-dom';

// Alert,

const ItemDetail = ({product}) => {

    const {img,price,title,description,stock}=product;

    const { addItem } = useContext(CartContext); 

    const [itemCount, setItemCount] =useState(0);

    //const [alertOpen, setAlertOpen] = useState(false);

    const onAdd = (qty) => {
        alert(`cargó ${qty} productos`)
        // setAlertOpen(true)
        // setTimeout(() =>{
        //     setAlertOpen(false)
        // },3000)
        setItemCount(qty);
        addItem(product,qty);

            //harcoreo el array
        // let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];

        // $cartList=[...$cartList,{id,title,price,img,qty}];

        // const $cartListJSON = JSON.stringify($cartList);      
        //         sessionStorage.setItem('cartList', $cartListJSON)
        //<Link to='/Cart' style={{textDecoration: "none"}}

    }
    
    
    
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
                {/* <Alert
                    color="info"
                    isOpen={alertOpen}
                    >
                        {`Has sumado ${itemCount} productos al carrito`}
                </Alert> */}
                {
                itemCount===0
                ?<ItemCount stock={stock}  onAdd={onAdd}/>
                :<NavLink href='/Cart' ><Button color="danger" onClick={(e) => {e.stopPropagation()}} outline>Checkout</Button></NavLink>
                }
                
            </CardFooter>
        </Card>
    </Col>
</Row>
        
        </>
    )
}

export default ItemDetail