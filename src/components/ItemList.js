import Item from './Item';
import { CardGroup,CardTitle,Card } from 'reactstrap';


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
        <CardGroup>
            {productList.map((product) =><Item key={product.id} id={product.id} product={product}/>)};
        </CardGroup>    
        </>
            
            

    )
}

export default ItemList;