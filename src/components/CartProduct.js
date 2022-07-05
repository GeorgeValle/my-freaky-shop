
import {useContext} from "react"
import {Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'
import {CartContext} from "../context/CartContext";


const CartProduct = ({product}) => {

    



    const {id,img,title,price,qty} = product;

    const {removeItem} =useContext(CartContext);

   


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
                        <CardTitle 
                        tag="h5"
                        >
                            
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardImg
                    alt={title}
                    src={img}
                    top
                    width="50%"
                    />
                    <Button color="primary" onClick={removeItem(id)}>Remover producto</Button>
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
                            {qty}
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
                    Stock de {qty} unidades.
                </CardText>
            </CardBody>
            <CardFooter>
            
                
            </CardFooter>
        </Card>
                
    </Col>
</Row>

    
    </>
    )
}

export default CartProduct
