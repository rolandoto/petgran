import React, { Fragment, useContext } from 'react'
import {Context} from '../Context'

export const User = () => {
   const {removeAuth} = useContext(Context)
    
    
    return (
        <Fragment>
            <h1>user</h1>

            <button onClick={removeAuth} >CERRAR SECCION</button>
        </Fragment>
    )
}

