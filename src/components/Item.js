import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg} from 'reactstrap'

const Item = ({product}) => {
    
    const {img,price,name,description,stock}=product;

    return (
    <>
    <div>
    <Card
        body
        color="dark"
        inverse
    >
    <CardBody>
        <CardImg
            alt={name}
            src="https://picsum.photos/318/180"
            top
            width="100%"
        />
        <CardTitle 
            tag="h5">
            {name}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            ${price}
        </CardSubtitle>
        <CardText>
            {description}
        </CardText>
        <Button>
            Button
        </Button>
        </CardBody>
    </Card>
</div>

    </>
    
    )
}

export default Item;