import React, { createContext, useState } from "react";


//aqui esta es creando el context 
const Context = createContext()

const Provider = ({children}) =>{


    const [isAuth,seIsAuth] = useState(false)


    const value =  {
        isAuth,
        activateAuth:() =>{
            seIsAuth(true)
        }
    }
    //envia un valor true que es true
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer: Context.Consumer
}