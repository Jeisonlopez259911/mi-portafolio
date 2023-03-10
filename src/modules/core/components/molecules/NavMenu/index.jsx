import { NavLink } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import './styles.css';

const img = require.context('../../../../../assets/img', true);

export function NavMenu() {
    return (
        <>
            <header className="App-header">
                <div className='navMenu'>
                    <NavLink className="navHome" href="#" to="/">
                        <ImHome />
                    </NavLink>
                    <div className="navbar-actions">
                        <NavLink className="nav-items" to="/projects">
                            Projects
                        </NavLink>
                        <NavLink className="nav-items" to="/contacto">
                            Contacto
                        </NavLink>
                    </div>
                </div>
            </header>
            <img
                className="imgNavMenu"
                src={img(`./imagenNavMenu.gif`)}
                alt="mi foto"
            />
        </>

        
    );
}