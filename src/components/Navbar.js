//import './styles/Navbar.css';
import CartWidget from './CartWidget';
import {Navbar, Nav, NavItem,NavLink, Button,NavbarBrand } from 'reactstrap';
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
                    active
                    href="#"
                        > 
                        Categoria 1
                    </NavLink>
                    <NavLink href="#" >
                        Categoria 2
                    </NavLink>
                    <NavLink href="#" >
                        Categoria 3
                    </NavLink>
                    <NavLink href="#" >
                        Categoria 4
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