import React from 'react';
import ItemCount from './ItemCount';
import {Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'

const ItemDetail = ({product}) => {
    
    const {img,price,title,description,stock}=product;
    
    return (
        <>
        
<Row>
    <Col sm="6" md="8" lg="10">
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
    <Col sm="6" md="8" lg="10">
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
                    tag="h6"
                >
                    ${price}
                </CardSubtitle>
                <CardText>
                    Stock de {stock} unidades.
                </CardText>
            </CardBody>
            <CardFooter>
                <ItemCount stock={stock}/>
            </CardFooter>
        </Card>
    </Col>
</Row>
        
        </>
    )
}

export default ItemDetail