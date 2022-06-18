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
                id===undefined
                ?setProductList(result)
                :setProductList(result.filter(item=>item.category.includes(id)))
                )
            .catch(err=>console.log(err))
            .finally(()=> setLoader(false));
        // const firebaseFetch = async ()=>{
        //     const querySnapshot = await getDocs(collection(db, "products"));
        //     querySnapshot.forEach((doc) => {
        //         console.log(doc.id, "=>", doc.data());
    //});
    
    
    }, [id]);
    //console.log(productList)
    return (
        <>
        {/* <div>{greeting}</div> */}

        {loader
            ?<Spinner color="secondary"></Spinner>
            :<ItemList productList={productList}/>}
        </>
    );
}



export default ItemListContainer;