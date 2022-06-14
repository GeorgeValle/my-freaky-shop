//import './styles/Navbar.css';
import CartWidget from './CartWidget';
import {Navbar, Nav, NavItem, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <>
        <div>
        <Navbar
        color="dark"
        light

        >
            
            
            
            
            
                <Link to="/" 
                style={{color: "White", Decoration: "none"}}
                >
                <h3>
                <span className= "text-danger">M</span>y <span className="text-danger">F</span>reaky <span className= "text-danger">S</span>hop
                </h3>
                </Link>
            
        

        
        <Nav 
        pills
        
        >

            
            
                

        
                    
                    
                         
                        <Link to="/category/Helmet"
                        style={{color: "White", Decoration: "none"}}
                        >
                        <h4>Helmets</h4>
                        </Link>
                    
        
                        <Link to="/category/Figura"
                        style={{color: "White", Decoration: "none"}}
                        >
                        <h4>Figura</h4>
                        </Link>
                    

        
                        <Link to="/category/Funko-Pop"
                        style={{color: "White", Decoration: "none"}}
                        >
                        <h4>Funko-Pops</h4>
                        </Link>
                    

        
                        <Link to="/category/Comic"
                        style={{color: "White", Decoration: "none"}}
                        >
                        <h4>Comics</h4>
                        </Link>
                    

                
            
            <NavItem>
                <CartWidget/>
            </NavItem>
            
            <NavItem>
                
                    <Link to="/"
                    style={{color: "White", Decoration: "none"}}
                    >
                    <Button
                    color="primary"
                    outline>
                        Ingresar
                    </Button>
                    </Link>
                
                
                    <Link to="/"
                    style={{color: "White", Decoration: "none"}}
                    >
                    <Button
                    color="primary"
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

    export default NavBar;