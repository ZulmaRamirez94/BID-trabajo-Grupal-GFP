import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home"
import NotFund from "../pages/NotFund";
import Ingreso from "../Components/ingreso/Ingreso";
import Gasto from "../Components/gasto/Gasto";
import Transacciones from "../Components/transaccion/Transacciones";

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFund />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'gestor/ingreso',
                element: <Ingreso />
            },
            {
                path:'gestor/gasto',
                element: <Gasto />
            },
            {
                path:'gestor/transacciones',
                element: <Transacciones/>
            },
            

        ]
    }
]);