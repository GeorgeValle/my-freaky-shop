// import react from 'react';
import Item from './Item';
import { CardGroup,CardTitle } from 'reactstrap';
//import { Link } from 'react-router-dom';

const ItemList = ({productList}) => {
    return(

        <>
        <CardTitle
            tag="h2"
            color="dark"
            className="text-center"
            >
            
                Cat&#225;logo
            
        </CardTitle>

        <CardGroup className="mx-auto">
            {productList.map((product) =><Item key={product.id} id={product.id} product={product}/>)};
        </CardGroup>    
        </>
            
            

    )
}

export default ItemList;