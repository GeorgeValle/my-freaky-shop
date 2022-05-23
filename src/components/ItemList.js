import react from 'react';
import Item from './Item'
import { CardGroup } from 'reactstrap';

const ItemList = ({productList}) => {
    return(

            <>
            <h3>cat&#225;logo</h3>
            <CardGroup>
            {productList.map((product) =><Item key={product.id} product={product}/>)}
            </CardGroup>
            </>

    )
}

export default ItemList;