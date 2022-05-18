//import './styles/Navbar.css';
import CartWidget from './CartWidget';
import {Navbar, Nav, NavItem,NavLink, Button,NavbarBrand,NavbarText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () =>{
    return(
        <>
        <div>
        <Navbar
        color="dark"
        light

        >
            <NavbarBrand
            
            href="/"
            // className="me-2"

            >
                <NavbarText
                className="logo">
                My Freaky Shop
                </NavbarText>
            </NavbarBrand>
        

        
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