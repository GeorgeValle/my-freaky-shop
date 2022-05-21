import React,{useState}from'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import {Button,Badge }from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//El componente contador
const ItemCount = ({stock})=>{
    // inicializamos la variable contador (el desafio pide que empiece en 1).
    const[counter, setCounter]=useState(1);
    let[disabledPlus, setDisabledPlus]=useState("primary");
    let[disabledMinus, setDisabledMinus]=useState("primary");
    //suma el use state
    
    const add=()=>{
        counter<stock 
        ?setCounter(counter+1)
        :setDisabledPlus(disabledPlus='secondary');
    }
    //resta el use state
    const subtract=()=>{
        counter>0
        ?setCounter(counter-1)
        :setDisabledMinus(disabledMinus='secondary');
        counter>0&&setCounter(counter-1);
    }

    return(
        <>
    
        <Button  onClick={add} color={disabledPlus}><AiOutlinePlusCircle style={{color: 'white', fontSize: '18px'}} /></Button>
        <Badge><h7>{counter}</h7></Badge>
        <Button onClick={subtract} color={disabledMinus}><AiOutlineMinusCircle style={{color: 'white', fontSize: '18px'}} /></Button>
        <Button  color="primary" outline >Agregar al carrito</Button>
    

        </>
        )
    }

    export default ItemCount;