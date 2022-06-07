import { FcPaid } from "react-icons/fc";
import {CartContext} from "../context/CartContext";
import {useContext, useState} from "react"
import {Alert,Button,Card,CardHeader,CardFooter,CardBody,CardTitle,CardSubtitle,CardText,CardImg,Row,Col} from 'reactstrap'



const Cart = () => {

    const list = useContext(CartContext);
    const [alertOpen, setAlertOpen]= useState(false);

    const deleted = () =>{
        list.removeProduct(list.item.idItem)
        setAlertOpen(true)
        setTimeout(() =>{
            setAlertOpen(false)
        },3000)
    }

    return(
        <>
        <h1>Carro de compras</h1>;
        {    
            list.cartList.length !== 0
            ?(<h2>Su carro esta vacio <FcPaid/></h2>)
            
            :list.cartList.map((item) => 
            <Row key={item.idItem}>
                <Col sm="10" md="8" lg="6">
                <Card 
                    body
                    color="dark"
                    inverse
                    >
        
                    <CardHeader>
                        <CardTitle tag="h5">
                            
                            {item.nameItem}
                        </CardTitle>
                    </CardHeader>
                    <CardImg
                    alt={item.nameItem}
                    src={item.imgItem}
                    top
                    width="40%"
                    />
                    <Button onClick={deleted}>Remover producto</Button>
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
                            {item.qtytem}
                        </CardText>
                    </CardHeader>
            <CardBody>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h5"
                >
                    ${item.priceItem}
                </CardSubtitle>
                <CardText>
                    Stock de  unidades.
                </CardText>
            </CardBody>
            <CardFooter>
            
                
            </CardFooter>
        </Card>
                <Alert
                    color="info"
                    isOpen={alertOpen}
                    >
                        {`Se eliminó ${item.qtyItem} productos del carrito`}
                </Alert>
    </Col>
</Row>)

        }
            
        </>
    );




}

export default Cart;