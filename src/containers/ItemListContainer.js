import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList'
import { Spinner } from 'reactstrap';
import { getData } from '../mocks/productsArray';

const ItemListContainer=({greeting})=>{
    const [loader, setLoader]=useState(false);
    const [productList, setProductList]=useState([]);
    

    useEffect(()=>{
        setLoader(true)
        getData
        .then((res)=> setProductList(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))

    }, [])
    //console.log(productList)
    return (
        <>
        <div>{greeting}</div>

        {loader
            ?<Spinner color="secondary">Cargando...</Spinner>
            :<ItemList productList={productList}/>}
        </>
    );
}



export default ItemListContainer;