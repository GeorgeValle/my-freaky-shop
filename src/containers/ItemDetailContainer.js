import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail'
import { Spinner } from 'reactstrap';
import { getData } from '../mocks/productsArray';

const ItemDetailContainer=()=>{
    const [loader, setLoader]=useState(false);
    const [product, setProduct]=useState([]);
    

    useEffect(()=>{
        setLoader(true)
        getData
        .then((res)=> setProduct(res[8]))
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))

    }, [])
    //console.log(productList)
    return (
        <>
        

        {loader
            ?<Spinner color="secondary">Cargando...</Spinner>
            :<ItemDetail product={product}/>}
        </>
    );
}



export default ItemDetailContainer