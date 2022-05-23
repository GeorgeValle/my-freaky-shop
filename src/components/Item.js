import React from 'react'
import {Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg} from 'reactstrap'
import ItemCount from './ItemCount'
const Item = ({product}) => {
    
    const {img,price,title,description,stock}=product;

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
            {description}
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