import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
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
                <input type="text" value={title} name={'title'} placeholder="Titulo del gasto" onChange={handleInput('title')} />
            </div>
            <div className="input-control">
                <input value={amount} type="number" name={'amount'} placeholder={'Monto'} onChange={handleInput('amount')} />
            </div>
            <div className="input-control">
                <DatePicker id='date' type='date' placeholderText='Agregue una fecha' selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Categoria</option>
                    <option value="education">Educacion</option>
                    <option value="groceries">Despensa</option>
                    <option value="health">Salud</option>
                    <option value="other">Otros</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Agregue una descripcion' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <button>Agregar</button>
        </form>
    )
}

export default GastoForm