// import react from 'react';
import Item from './Item';
import { CardGroup,CardTitle,Card } from 'reactstrap';
//import { Link } from 'react-router-dom';

const ItemList = ({productList}) => {
    return(

        <>
        <Card
        body
        color="dark"
        inverse
        >
            <CardTitle
                tag="h2"
                color="white"
                className="text-center"
            
            >
            
                Cat&#225;logo
            
            </CardTitle>
        </Card>
        <CardGroup className="mx-auto">
            {productList.map((product) =><Item key={product.id} id={product.id} product={product}/>)};
        </CardGroup>    
        </>
            
            

    )
}

export default ItemList;