import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList'
import { Spinner } from 'reactstrap';
//import { getData } from '../mocks/productsArray';
import {useParams} from 'react-router-dom';
import {FireStoreFetch} from '..utils/FireStoreFetch'


const ItemListContainer=({greeting})=>{
    const [loader, setLoader]=useState(false);
    const [productList, setProductList]=useState([]);
    const {id}=useParams();
    

    useEffect(()=>{
        setLoader(true);
        const firebaseFetch = async ()=>{
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
    });
    
    };   
    firebaseFetch();
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