import React, { createContext, useState } from "react";


//aqui esta es creando el context 
export const Context = createContext()

const Provider = ({children}) =>{

    //diferencia en localStorage vs sessionStorage
    // localStorage persiste para siemrpe o hasta ser borrada manuelmente
    //sessionStorage persiste hasta que culmine la seccion
    const [isAuth,seIsAuth] = useState(() =>{
        return window.sessionStorage.getItem('token')
    })

    const value =  {
        isAuth, 
        activateAuth:token =>{ 
            seIsAuth(true)
            //aqui se envia un token y el toke por funcion
            window.sessionStorage.setItem('token',token)
        },

        removeAuth: () => {
            seIsAuth(false)
            window.sessionStorage.removeItem('token')
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