import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList'
import { Spinner } from 'reactstrap';
//import { getData } from '../mocks/productsArray';
import {useParams} from 'react-router-dom';
import {FirestoreFetch} from '../utils/FireStoreFetch'

//recibía grettings {greeting}
const ItemListContainer=()=>{
    const [loader, setLoader]=useState(false);
    const [productList, setProductList]=useState([]);
    const {id}=useParams();
    

    useEffect(()=>{
        setLoader(true);
        FirestoreFetch(id)
            .then(result=>
                setProductList(result)
                )
            .catch(
                err=>console.log(err)
                )
            .finally(
                ()=> setLoader(false)
                );
        
    
    
    }, [id]);
    
    return (
        <>
        

        {loader
            ?<Spinner color="secondary"></Spinner>
            :<ItemList productList={productList}/>}
        </>
    );
}



export default ItemListContainer;