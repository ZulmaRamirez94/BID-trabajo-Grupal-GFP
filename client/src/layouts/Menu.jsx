import React from 'react'
import { Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-2 bg-success py-4">
                <div className="container">
                    <Link className="navbar-brand" to="/" data-toggle="tooltip" data-placement="bottom" title="Gestor De Finanza Personal"><h1>Gestor de Finanzas Personal</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-toggle="tooltip" data-placement="bottom" title="Finanzas">
                                <h6 className='m-2 w-75'>Administrar Finanzas</h6>
                                </Link>
                                <ul className="dropdown-menu m-2" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item " to="gestor/ingreso"><h5>Agregar Ingreso</h5></Link>
                                    <Link className="dropdown-item " to="gestor/gasto"><h5>Agregar Gasto</h5></Link>
                                    <Link className="dropdown-item " to="gestor/transacciones"><h5>Transacciones</h5></Link>
                                    <div className="dropdown-divider"></div>
                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" to="/" data-toggle="tooltip" data-placement="bottom" title="Login"><h6>Login</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2" to="/" data-toggle="tooltip" data-placement="bottom" title="Register"><h6>Register</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Menu