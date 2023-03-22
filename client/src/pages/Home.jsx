import React from 'react'
import bienvenido from "../Assets/img/bienvenido.gif";

const Home = () => {
    return (
        <div className='home' data-bs-spy="scroll">
            <h1 style={{marginLeft:'500px', marginTop:'30px', fontFamily:'cursive'}}>¡Bienvenidos!</h1><hr/>
            <h3 style={{marginLeft:'300px', fontFamily:'cursive'}}>Alguien capaz de ahorrar y mantener en orden sus<br/> finanzas, también puede hacer crecer su dinero.</h3>
            <img className="shadow-lg p-3 mb-5 bg-white rounded"  style={{ width:'950px', height:'520px', marginLeft:'200px', marginTop:'30px', borderRadius:'100px 100px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 15px 25px' }} src={bienvenido} alt='User'/>
        </div>
    )
}

export default Home