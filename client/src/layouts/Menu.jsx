import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../Assets/img/logofinanzas.png'
import '../Assets/css/style.css';
import Logout from '../Components/logout/Logout';



const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-2 " style={{ backgroundColor: '#45b63c', maxheight: '300px'}}>
                <div className="container d-flex flex-wrap ">
                    <Link className="navbar-brand" to="/" data-toggle="tooltip" data-placement="bottom" title="Gestor De Finanza Personal">
                    <h2><img src={logo} alt='logo'  ></img> GESTOR DE FINANZA PERSONAL </h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-toggle="tooltip" data-placement="bottom" title="Finanzas">
                                <h6 className='finanzas m-2'>Administrar Finanzas</h6></Link>
                                <ul className="dropdown-menu m-2" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item " to="gestor/ingreso"><h6>Agregar Ingreso</h6></Link>
                                    <Link className="dropdown-item " to="gestor/gasto"><h6>Agregar Gasto</h6></Link>
                                    <div className="dropdown-divider"></div>
                                    <Logout />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" to="gestor/transacciones" data-toggle="tooltip" data-placement="bottom" title="transacciones"><h6>Transacciones</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" to="/login" data-toggle="tooltip" data-placement="bottom" title="Login"><h6>Login</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" to="/register" data-toggle="tooltip" data-placement="bottom" title="Register"><h6>Register</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Menu