import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList'


const ItemListContainer=({greeting})=>{
    const [productList, setProductList]=useState([]);
    const products = [
        {id:'01', title:'Casco Darth Vader', description:'Casco de Darth Vader de Star Wars', price:'85000',stock:5, img:' '},
        {id:'02',title:'Casco Boba Fett',description:'Casco de Boba Fett de Star Wars',price:'79000',stock:5 , img:''},
        {id:'03',title:'Casco The Mandalorian',description:'Casco de Mando de Star wars',price:'80000',stock:8, img:''}, 
        {id:'04',title:'Figura Legolas',description:'Legolas de Lord of the Rings',price:'14500',stock:3, img:''}, 
        {id:'05',title:'Figura Gandalf',description:'Gandalf de Lord of the Rings',price:'13500',stock:3, img:''}, 
        {id:'06',title:'Figura Gimli',description:'Gimli de Lord of the Rings',price:'14500',stock:3, img:''}, 
        {id:'07',title:'Comic Injustice OMNIBUS Vol 1',description:'Comic de DC serie Injustice Gods among us - VOl 1',price:'27500',stock:7, img:''}, 
        {id:'08',title:'Comic Caballero Luna Cuenta atrás',description:'Comic Marvel Vol 1 cuenta hacía la oscuridad',price:'5720',stock:15, img:''}, 
        {id:'09',title:'Comic He-Man',description:'Comic He-Man and Master of the Universe - colleccion mini comics completa',price:'15400',stock:6, img:''}, 
        {id:'10',title:'Figura Daniel Larusso',description:'Figura de acción de Daniel Larusso - Cobra Kai',price:'10900',stock:2, img:''}, 
        {id:'11',title:'Figura Jhonny Lawrence',description:'Figura de acción de Johnny Lawrence - Cobra Kai ',price:'10900',stock:2, img:''}, 
        {id:'12',title:'Funko Pop BloodHound ',description:'Funko del personaje BloodHound del juego Apex Legend',price:'5500',stock:5, img:''}, 
        {id:'13',title:'Funko Pop Caustic',description:'Funko del personaje Caustic del juego Apex Legend',price:'5500',stock:5, img:''}, 
        {id:'14',title:'Funko Pop Gibraltar',description:'Funko del personaje Gibraltar del juego Apex Legend',price:'5500',stock:5, img:''}
    ]

    const getData=new Promise((resolve, reject)=>{
        let verification=true;
        setTimeout(()=>{
            verification
            ?resolve(products)
            :reject(console.log("Error Inesperado, vuelva a intentar en unos minutos"));
        },3000)    
    })

    useEffect(()=>{
        getData
        .then((res)=> setProductList(res))
        .catch((error)=> console.log(error))

    }, [])
    //console.log(productList)
    return (
        <>
        <div>{greeting}</div>
        <ItemList productList={productList}/>
        </>
    );
}



export default ItemListContainer;