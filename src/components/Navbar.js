import CartWidget from './CartWidget';
import {Navbar, Nav, NavItem, Button } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GrClose, GrMenu } from "react-icons/gr";
import "./styles/Navbar.css";
import { Link } from 'react-router-dom';
import {CartContext} from "../context/CartContext";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
// import {ButtonNav} from "./ButtonNav";


const NavBar = () =>{
    const navigate= useNavigate();
    const { logout, loading}= useContext(CartContext);
    const access = useContext(CartContext);
    const [clicked, setClicked] =useState(false);

        
    
    const handleLogout = async () =>{
        await logout();
        access.setStatus(false);
        setClicked(false);
        navigate('/');
    }

    const onClose = async () =>{
        setClicked(false);
    }


    if(loading) return <h1 className="bg-dark text-light">Entrando al portal</h1>
    

    return(
        <>
        <div>
        <Navbar
            color="dark"
            light
        >
            
                <Link to="/" 
                    style={{color: "White"}}
                    className="text-decoration-none navbar-logo"
                    onClick={()=>setClicked(false)}
                >
                <h3>
                    <span className= "text-danger">M</span>y <span className="text-danger">F</span>reaky <span className= "text-danger">S</span>hop
                </h3>
                </Link>
            
        

        
        <Nav 
        pills
        
        >
            <ul className={clicked? 'nav-menu active':'nav-menu'}>
                
                        <Link to="/category/Helmet"
                            className=" nav-links"
                            onClick={()=>setClicked(false)}
                        >
                        <h4 className="py-2 ">Helmets</h4>
                        </Link>
                    
        
                        <Link to="/category/Figura"
                            className="nav-links"
                            onClick={()=>setClicked(false)}
                        >
                        <h4 className="py-2 ">Figura</h4>
                        </Link>
                    

        
                        <Link to="/category/Funko-Pop"
                            className="nav-links"
                            onClick={()=>setClicked(false)}
                        >
                        <h4 className="py-2 ">Funko-Pops</h4>
                        </Link>
                    

        
                        <Link to="/category/Comic"
                            className="nav-links"
                            onClick={()=>setClicked(false)}
                        >
                        <h4 className="py-2 ">Comics</h4>
                        </Link>
            
            
                        
            <NavItem>
                
                {
                    access.status===true&&(<>
                    <Button
                        onClick={handleLogout}
                        className="mx-2 mb-2 btn-danger"
                    >
                        Salir
                    </Button>
                    </>)
                }
                {
                    access.status===false&&(<>
                    <Link to="/Login"
                        style={{color: "White"}}
                        className="p-2 mb-2"
                    >
                    <Button
                        color="primary"
                        outline
                        className="p-2 mb-2"
                        onClick={()=>setClicked(false)}
                    >
                        Ingresar
                    </Button>
                    </Link>
                    <Link to="/Register"
                    style={{color: "White"}}
                    className="p-2 "
                    >
                    <Button
                        color="primary"
                        className="p-2 mb-2"
                        onClick={()=>setClicked(false)}
                    >
                        Registrarse
                    </Button>
                    </Link>
                    </>)
                }
            </NavItem>
            </ul>
            <NavItem>
                <Button
                        color="secondary"
                        className="menu-icon mx-2" onClick={()=>setClicked(current=>!current)}>
                    {clicked?<GrClose style={{color: 'white', fontSize: '22px'}} />:<GrMenu style={{color: 'white', fontSize: '22px'}} />}
                </Button>
            </NavItem> 
            <NavItem>
                <CartWidget>
                </CartWidget>
            </NavItem>
        </Nav>   
        </Navbar>
        </div>
        </>
    )
}


    export {NavBar};