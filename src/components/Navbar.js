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
                <span className= "text-danger">M</span>y <span className="text-danger">F</span>reaky <span className= "text-danger">S</span>hop
                </h3>
            </NavLink>
        

        
        <Nav 
        pills
        
        >

            
            
                

        <NavLink
                    // active
                    href="/category/Helmet"
                        > 
                        <h4>Helmets</h4>
                    </NavLink>
        <NavLink href="/category/Figura" >
                        <h4>Figura</h4>
                    </NavLink>

        <NavLink href="/category/Funko-Pop" >
                        <h4>Funko-Pops</h4>
                    </NavLink>

        <NavLink href="/category/Comic" >
                        <h4>Comics</h4>
                    </NavLink>

                
            
            <NavItem>
                <CartWidget/>
            </NavItem>
            
            <NavItem>
                <NavLink href="/">
                    <Button
                    color="primary"
                    outline>
                        Ingresar
                    </Button>
                </NavLink>
                <NavLink href="/">
                    <Button
                    color="primary"
                    >
                        Registrarse
                    </Button>
                    </NavLink>
            </NavItem>
            
        </Nav>
    
        </Navbar>
        </div>
        </>
    )
}

    export default NavBar;