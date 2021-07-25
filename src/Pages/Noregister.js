import React, { Fragment,useContext } from 'react'
import { LoginMutation } from '../containers/LoginMutation'
import { RegisterMutation } from '../containers/RegisterMutation'
import {Context} from '../Context'
import { Useform } from '../Useform/Useform'

export const Noregister = () => {
    const {activateAuth} = useContext(Context) 

   
        
            return(
                <Fragment>
                    <RegisterMutation>
                        {
                            (register,{data,loading,error}) => {
                                const onsubmit = ({email, password}) =>{
                                    const input = {email,password}
                                    const variables = {input}
                                    register({variables}).then(({data}) => {
                                        const {signup} = data 
                                        
                                        activateAuth(signup)
                                    })
                                }

                                const errorMsg = error && 'El usuario ya existe o hay algún problema.'

                                return <Useform error={errorMsg} disabled={loading}   onSubmit={onsubmit} title="Registrarse"/> 
                            }
                        }
                    </RegisterMutation>
                       
                            {/**mutatacion de login y signup */}
                        <LoginMutation>
                            {

                                (login,{data,loading,error} ) =>{
                                    const onsubmit = ({email, password}) =>{
                                            const input = {email,password}
                                            const variables = {input}
                                            login({variables}).then(({data}) => {
                                                const {login} = data
                                                activateAuth(login ) 
                                            })
                                        }
                                    const errorMsg = error && 'El usuario ya existe o hay algún problema.'
                                    
                                    return  <Useform disabled={loading} error={errorMsg} onSubmit={onsubmit} title="iniar seccion" /> 
                                }
                            }
                            
                        </LoginMutation>
                </Fragment>
           
    
)
        
}
