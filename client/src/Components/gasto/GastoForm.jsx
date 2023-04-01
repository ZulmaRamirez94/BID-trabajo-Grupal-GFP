import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from '../../context/Context';
 
const GastoForm = () => {
    const { addExpense, error, setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }
      return (
 
  
        <form onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input type="text" className="form-control m-2" value={title} name={'title'} placeholder="Titulo del gasto" onChange={handleInput('title')} required />
            </div>
            <div className="input-control">
                <input value={amount} type="number" className="form-control m-2" name={'amount'} placeholder={'Monto'} onChange={handleInput('amount')} required />
            </div>
            <div className="input-control">
                <DatePicker id='date' type='date' className="form-control m-2" required placeholderText='Agregue una fecha' selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" className="form-control m-2 " id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Categoria</option>
                    <option value="servicios">Servicios Basicos</option>
                    <option value="alimentos">Alimentacion</option>
                    <option value="salud">Salud</option>
                    <option value="vestimenta">Vestimenta</option>
                    <option value="ocio">Ocios</option>
                    <option value="otros">Otros</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} className="form-control m-2" required placeholder='Agregue una descripcion' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <button className=' btn btn-success m-2'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg> Agregar</button>
        </form>
    )
}

export default GastoForm