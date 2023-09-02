import './Form2.css'
import { useState} from 'react'
function Form2(){
    function converter(evento){
        evento.preventDefault()
     let conversão = (Number(valorFahrenheit) - 32) / 1.8
       console.log(conversão)
       setres (conversão)

    }
    let[valorFahrenheit,setValor1] = useState()
    let[res,setres] = useState()
    return(
        <div className="div">
            <h1 className ="h1">Conversão de Temperaturas</h1>
            <form className='form' onClick ={converter}>
                <label className='label'>Temperatura Fahrenheit:</label>
                <input className='input' type ='text' 
                onClick={(evento)=> setValor1(evento.target.value)}></input>
                <button className='button' type='submit'>Converter</button>
                <p>{res}</p>
            </form>
        </div>
 

    )
    
    };


export default Form2;

