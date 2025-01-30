
import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = ( {label, placeholder, obrigatorio, valor, aoAlterado} ) => {

  

  const digitado = (e) =>{
    aoAlterado(e.target.value)
  }
  return (
    <div className='campo-texto'>

        <label htmlFor="#">{label}</label>

        <input 
        value={valor}
         onChange={digitado}
         type="text"
         required={obrigatorio}
         placeholder={placeholder}/>
    </div>
  )
}

export default CampoTexto