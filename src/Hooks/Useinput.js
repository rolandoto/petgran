import React, { useState }  from 'react'

//funcion  para formularios 
export const UseInput = initialVales => {
    const [value,setValue] = useState(initialVales)
    const onChange = e =>
     setValue(e.target.value)
    console.log(value)

     return{value,onChange}
    //el aqui me va a pasar 
    }
