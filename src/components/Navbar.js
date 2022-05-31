//import './styles/Navbar.css';
import CartWidget from './CartWidget';
import {Navbar, Nav, NavItem,NavLink, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () =>{
    return(
        <>
        <div>
        <Navbar
        color="dark"
        light

        >
            <NavLink
            
            href="/"
            
            className="me-2 brand"

            >
                <h3>
                My Freaky Shop
                </h3>
            </NavLink>
        

        
        <Nav 
        pills
        
        >

            
            
                

        <NavLink
                    // active
                    href="#"
                        > 
                        Helmets
                    </NavLink>
        <NavLink href="#" >
                        Figuras
                    </NavLink>

        <NavLink href="#" >
                        Funko-Pops
                    </NavLink>

        <NavLink href="#" >
                        Comics
                    </NavLink>

                
            
            <NavItem>
                <CartWidget/>
            </NavItem>
            
            <NavItem>
                <Button
                color="primary"
                outline>
                    Ingresar
                </Button>
                <Button
                color="primary"
                >
                    Registrarse
                </Button>
            </NavItem>
            
        </Nav>
    
        </Navbar>
        </div>
        </>
    )
}

    export default NavBar;