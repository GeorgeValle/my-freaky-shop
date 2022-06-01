import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList'
import { Spinner } from 'reactstrap';
import { getData } from '../mocks/productsArray';
import {useParams} from 'react-router-dom';

const ItemListContainer=({greeting})=>{
    const [loader, setLoader]=useState(false);
    const [productList, setProductList]=useState([]);
    const {id}=useParams();
    

    useEffect(()=>{
        setLoader(true)
        getData
        .then((res)=> id===undefined?setProductList(res):setProductList(res.filter(item=>item.category.includes(id))))
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))

    }, [id])
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