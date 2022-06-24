import React,{useState}from'react';
import {Button,Badge }from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineAddShoppingCart, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";


//El componente contador
const ItemCount = ({stock=0, initial=1,  onAdd})=>{
    // inicializamos la variable contador.
    const[counter, setCounter]=useState(Number(initial));
    //let[disabledPlus, setDisabledPlus]=useState("primary");
    //let[disabledMinus, setDisabledMinus]=useState("primary");
    let[blockedPlus, setBlockedPlus]=useState(false);
    let[blockedMinus, setBlockedMinus]=useState(false);
    

    //suma el use state
    const add=()=>{
        counter<stock 
        ?setCounter(counter+1)
        :setBlockedPlus(true);
        
        setBlockedMinus(false);

        //setDisabledMinus(disabledMinus="primary");
    }
    //resta el use state
    const subtract=()=>{
        counter>0
        ?setCounter(counter-1)
        :setBlockedMinus(true);
        
        setBlockedPlus(false);
        //setDisabledPlus(disabledPlus="primary");
    }

    return(
        <>
    
        <Button  onClick={add} color="primary" disabled={blockedPlus}><AiOutlinePlusCircle style={{color: 'white', fontSize: '18px'}} /></Button>
        <Badge>{counter}</Badge>
        <Button onClick={subtract} color="primary" disabled={blockedMinus}><AiOutlineMinusCircle style={{color: 'white', fontSize: '18px'}} /></Button>
        
        {
            counter===0
            
        ?<Button  color="secondary" outline> <MdOutlineShoppingCart style={{color: 'white', fontSize: '18px'}}/> Agregar al carrito</Button>
        :<Button  color="primary" outline onClick={(e)=>{e.stopPropagation(); onAdd(counter)}} > <MdOutlineAddShoppingCart style={{color: 'white', fontSize: '18px'}}/> Agregar al carrito</Button>
        }
    

        </>
        )
    }

    export default ItemCount;