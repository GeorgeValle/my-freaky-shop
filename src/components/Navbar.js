import './styles/Navbar.css';

const Navbar = () =>{
    return(
        <>
        <div className="topNav">
            <h2 className="logo-navbar"> My Freaky Shop</h2>
            <div>
                <ul className="menu-list">
                    <li className="item-list">
                        Categoria 1
                    </li>
                    <li className="item-list">
                        Categoria 2
                    </li>
                    <li className="item-list">
                        Categoria 3
                    </li>
                    <li className="item-list">
                        Categoria 4
                    </li>
                </ul>
            </div>
            <div className="Buttons">
                <button className="btns" type="button">Ingresar</button>
                <button className="btns" type="button">Registrarse</button>
            </div>
            
        </div>
        </>
    )
}

    export default Navbar;