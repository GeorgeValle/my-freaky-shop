import react from 'react';
import Item from './Item';
import { CardGroup,CardTitle } from 'reactstrap';

const ItemList = ({productList}) => {
    return(

            <>
            <CardTitle
            tag="h4"
            color="dark"
            inverse
            >
                
            Cat&#225;logo
            </CardTitle>

            <CardGroup>
                    {productList.map((product) =><Item key={product.id} product={product}/>)};
            </CardGroup>    
            </>
            
            

    )
}

export default ItemList;