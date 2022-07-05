import React from 'react'
import {Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    
    const {id, img,price,title}=product;

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
        <Link to={`/Item/${id}`} ><Button color="primary">Ver Detalles</Button></Link>
        </CardText>
        </CardFooter>
    </Card>
</div>

    </>
    
    )
}

export default Item;