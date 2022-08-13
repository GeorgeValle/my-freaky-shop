import ItemCount from './ItemCount';
import {Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'
import React,{useState, useContext } from'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({product}) => {

    const {id,img,price,title,description,stock}=product;

    //para agregar pductos al carro
    const { addItem } = useContext(CartContext); 
    const {setAlertOpen} = useContext(CartContext);
    const {setNOrden} = useContext(CartContext);

    //para manejar el alert
    const [notifyOpen, setNotifyOpen] = useState(false);

    const [itemCount, setItemCount] =useState(0);

    
    //función para sumar productos al carrito
    const onAdd = (qty) => {



        
        // alert(`cargó ${qty} productos`);
        setNotifyOpen(true);
        setAlertOpen(false);
        setNOrden("");
        setTimeout(() =>{
            setNotifyOpen(false)
        },3000);
        addItem({id,img,price,title,qty});
        setItemCount(qty);

    }
    
    
    
    return (
        <>
<div className="mx-auto">       
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
                
                notifyOpen===false?<div>
                    {` `}
                </div>    
                :<div className="bg-success text-light px-2 mb-2">
                        {`Has sumado ${itemCount} productos al carrito`}
                </div>

                }

                {
                itemCount===0
                ?<ItemCount stock={stock} initial={itemCount}  onAdd={onAdd}/>
                :<Link to='/Cart'><Button color="danger"  outline>Checkout</Button></Link>
                }
                
            </CardFooter>
        </Card>
    </Col>
</Row>
</div>
        
        </>
    )
}

export default ItemDetail