import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../Assets/img/logoGFP.png'
import '../Assets/css/style.css';
import Logout from '../Components/logout/Logout';

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-2 " style={{ backgroundColor: '#45b63c', maxheight: '65px'}}>
                <div className="container d-flex flex-wrap "  style={{ backgroundColor: '#45b63c', maxheight: '65px'}} >
                    <p className="navbar-brand" to="/" data-toggle="tooltip" data-placement="bottom" title="Gestor De Finanza Personal">
                    <img src={logo} alt='logo'/></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown m-2"  style={{ backgroundColor: 'black'}}>
                                <Link className="nav-link dropdown-toggle" style={{ backgroundColor: '#45b63c', fontSize:'22px', fontFamily:'cursive'}} to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-toggle="tooltip" data-placement="bottom" title="Finanzas">
                                    Administrar Finanzas </Link>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                                        <Link className="dropdown-item " to="gestor/ingreso"><h5 style={{ fontFamily:'cursive' }}>Agregar Ingreso</h5></Link>
                                        <Link className="dropdown-item " to="gestor/gasto"><h5 style={{ fontFamily:'cursive' }}>Agregar Gasto</h5></Link>
                                        <div className="dropdown-divider"></div>
                                        <span><Logout /></span>
                                    </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" style={{ maxheight: '65px', fontSize:'22px', fontFamily:'cursive'}} to="gestor/transacciones" data-toggle="tooltip" data-placement="bottom" title="transacciones"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-clipboard2-data" viewBox="0 0 16 16">
                                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                                <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"/>
                            </svg> Transacciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" style={{ maxheight: '65px', fontSize:'22px', fontFamily:'cursive'}} to="/login" data-toggle="tooltip" data-placement="bottom" title="Login"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg> Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" style={{ maxheight: '65px', fontSize:'22px', fontFamily:'cursive'}} to="/register" data-toggle="tooltip" data-placement="bottom" title="Register"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                              </svg> Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Menu