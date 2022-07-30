import CartWidget from './CartWidget';
import {Navbar, Nav, NavItem, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {CartContext} from "../context/CartContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";


const NavBar = () =>{
    const navigate= useNavigate();
    const {user, logout, loading}= useContext(CartContext);

    const handleLogout = async () =>{
        await logout();
        navigate('/');
    }

    if(loading) return <h1>loading</h1>

    return(
        <>
        <div>
        <Navbar
            color="dark"
            light

        >
            
                <Link to="/" 
                    style={{color: "White"}}
                    className="text-decoration-none"
                >
                <h3>
                    <span className= "text-danger">M</span>y <span className="text-danger">F</span>reaky <span className= "text-danger">S</span>hop
                </h3>
                </Link>
            
        

        
        <Nav 
        pills
        
        >
                        <Link to="/category/Helmet"
                            style={{color: "White"}}
                            className="text-decoration-none"
                        >
                        <h4 className="p-2 ">Helmets</h4>
                        </Link>
                    
        
                        <Link to="/category/Figura"
                            style={{color: "White"}}
                            className="text-decoration-none"
                        >
                        <h4 className="p-2 ">Figura</h4>
                        </Link>
                    

        
                        <Link to="/category/Funko-Pop"
                            style={{color: "White"}}
                            className="text-decoration-none"
                        >
                        <h4 className="p-2 ">Funko-Pops</h4>
                        </Link>
                    

        
                        <Link to="/category/Comic"
                            style={{color: "White"}}
                            className="text-decoration-none"
                        >
                        <h4 className="p-2 ">Comics</h4>
                        </Link>
            
            <NavItem>
                <CartWidget/>
            </NavItem>
            
            <NavItem>


                    {/* <button
                        onClick={handleLogout}
                    >
                        Salir
                    </button> */}
                
                    <Link to="/Login"
                        style={{color: "White"}}
                        className="p-2"
                    >
                    <Button
                        color="primary"
                        outline
                        
                    >
                        Ingresar
                    </Button>
                    </Link>
                
                
                    <Link to="/Register"
                    style={{color: "White"}}
                    className="p-2"
                    >
                    <Button
                        color="primary"
                        className="p-2"
                    >
                        Registrarse
                    </Button>
                    </Link>
                    
            </NavItem>
            
        </Nav>
    
        </Navbar>
        </div>
        </>
    )
}


    export {NavBar};