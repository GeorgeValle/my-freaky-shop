import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail'
import { Spinner } from 'reactstrap';
//import { getData } from '../mocks/productsArray';
import { useParams } from 'react-router-dom';
import {firestoreFetchOne} from '..utils/FireStoreFetch';

const ItemDetailContainer=()=>{
    const [loader, setLoader]=useState(false);
    const [product, setProduct]=useState([]);
    const {id}=useParams();
    

    useEffect(()=>{
        setLoader(true)
        firestoreFetchOne(id)
        .then((res)=>setProduct(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))

    }, [id])
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