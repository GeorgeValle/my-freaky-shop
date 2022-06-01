import React from 'react'
import {Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg, NavLink} from 'reactstrap'
import ItemCount from './ItemCount'
const Item = ({product}) => {
    
    const {id, img,price,title,stock}=product;

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
            tag="h6"
        >
            ${price}
        </CardSubtitle>
    
        <CardText>
            <NavLink href={`item/${id}`}><Button color="primary">Ver Detalles</Button></NavLink>
        </CardText>
        </CardBody>
        <CardFooter>
        <ItemCount stock={stock}/>
        </CardFooter>
    </Card>
</div>

    </>
    
    )
}

export default Item;