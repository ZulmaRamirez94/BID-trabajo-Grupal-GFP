import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import "../Assets/css/style.css";

const Layout = () => {
    return (
        <>
            <Menu />
            <div className='container w-100 mt-5'>
                <Outlet /> {/*los hijos que van a onfigurarse en esta ruta */}
            </div>
        </>
    )
}

export default Layout