import React from 'react'
import {Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';
// import ItemCount from './ItemCount'

const Item = ({product}) => {
    
    const {id, img,price,title/*,stock*/}=product;

    return (
    <>
    <div>
    <Card
        body
        color="dark"
        inverse
        
    >
    
        <CardImg
            alt={title}
            src={img}
            top
            width="100%"
        />
        <CardHeader>
        <CardTitle 
            tag="h5">
            {title}
        </CardTitle>
        </CardHeader>
        <CardBody>
        
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
        >
            ${price}
        </CardSubtitle>
    
        
        </CardBody>
        <CardFooter>
        <CardText>
        <Link to={`/Item/${id}`} style={{ Decoration: "none"}}><Button color="primary">Ver Detalles</Button></Link>
        </CardText>
        {/* <ItemCount stock={stock}/> */}
        </CardFooter>
    </Card>
</div>

    </>
    
    )
}

export default Item;