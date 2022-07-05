import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail'
import { Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import {FirestoreFetchOne} from '../utils/FireStoreFetch';

const ItemDetailContainer=()=>{
    const [loader, setLoader]=useState(false);
    const [product, setProduct]=useState({});
    const {id}=useParams();
    

    useEffect(()=>{
        setLoader(true)
        FirestoreFetchOne(id)
        .then((res)=>
        setProduct(res)
        )
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))

    }, [id])
    
    return (
        <>
        

        {loader
            ?<Spinner color="secondary"></Spinner>
            :<ItemDetail product={product}/>}
        </>
    );
}



export default ItemDetailContainer