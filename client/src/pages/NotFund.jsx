import React from 'react'
import { useRouteError } from 'react-router-dom'
import PageNotFund from '../styles/notFund.gif'

const NotFund = () => {
    const errors = useRouteError();
    return (
        <div className='container mt-5'>
            <div className='alert alert-darger' style={{marginLeft:'405px', marginTop:'30px', fontFamily:'cursive', fontSize:'100px'}}>{errors.statusText || errors.message}</div>
            <hr />
            <img className='w-50 mx-auto d-block' style={{ width:'950px', height:'520px', marginLeft:'200px', marginTop:'30px', borderRadius:'100px 100px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 15px 25px' }}  src={PageNotFund} alt='page not fund'/>
        </div>
    ) 
        
}

export default NotFund