//import React from 'react';
import ItemCount from './ItemCount';
import {Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'
import React,{useState, useContext }from'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({product}) => {

    const {img,price,title,description,stock}=product;

    const { addItem } = useContext(CartContext); 

    const [itemCount, setItemCount] =useState(0);

    

    const onAdd = (qty) => {
        alert(`cargó ${qty} productos`)
        
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
                {
                itemCount===0
                ?<ItemCount stock={stock}  onAdd={onAdd}/>
                :<Link to='/Cart' style={{Decoration: "none"}}><Button color="danger"  outline>Checkout</Button></Link>
                }
                
            </CardFooter>
        </Card>
    </Col>
</Row>
        
        </>
    )
}

export default ItemDetail