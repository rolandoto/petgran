import React, { Fragment } from 'react'
import { Registermutation } from '../containers/RegisterMutation'
import Context from '../Context'
import { Useform } from '../Useform/Useform'

export const Noregister = () => (
    <Context.Consumer>
    {
        ({activateAuth}) => {
        
            return(
                <Fragment>
                    <Registermutation>
                        
                        //autentication con graphql
                        {
                            (register) => {
                                const onsubmit = ({email,password}) =>{
                                    const input = {email,password}
                                    const variables = {input}
                                    register({variables}).then(activateAuth)
                                }
                                return <Useform  onSubmit={onsubmit} title="Registrarse"/> 
                            }
                        }
                    </Registermutation>
                     

                        <Useform  onSubmit={activateAuth} title="iniar seccion "/>

                </Fragment>
              
            )

        }
    }
</Context.Consumer>


)
   
     
