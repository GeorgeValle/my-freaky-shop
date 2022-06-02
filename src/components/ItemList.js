import react from 'react';
import Item from './Item';
import { CardGroup,CardTitle } from 'reactstrap';

const ItemList = ({productList}) => {
    return(

        <>
        <CardTitle
            tag="h4"
            color="dark"
            className="text-center"
            >
            <h1 className="text-primary">
                Cat&#225;logo
            </h1>
        </CardTitle>

        <CardGroup className="mx-auto">
            {productList.map((product) =><Item key={product.id} id={product.id} product={product}/>)};
        </CardGroup>    
        </>
            
            

    )
}

export default ItemList;