//el primer paso para poder definir un componente es el
//nombre , no olvidarnos si esta en minuscula o mayuscula.
//no pueden tener dos contenedores padres ..solo define uno 
//useState es una funcion de react
import { useState } from 'react';

import './App.css';
const PrimerComponente = ()=>{
    //todo lo que este dentro del return sera renderizado
        //tambien se pueden trabajar ul entre otros
        //tambien llamdo Hook
const[count,setCount ] =useState(0)
//son dos funciones
const sumar =()=> setCount(count + 1);
const restar =()=> setCount(count -1);
    return(
        <div>
            <h1 className='titulo'>Este es mi componente{count} </h1>
            {/* vamos a crear 2 botones para sumar y para restar*/}
            <button onClick={sumar} >SUMAR</button>
            <button onClick={restar} >RESTAR</button>
        </div>
    )   
}

export default PrimerComponente;
