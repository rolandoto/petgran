import React, { Fragment, useState } from 'react'
import { UseInput } from '../Hooks/Useinput'
import { Error,Button, Form,Input,Title } from './style'



export const Useform = ({error,onSubmit,title,disabled}) => {

   const email =  UseInput('')
   const password = UseInput('')

   const hansubmit  = (e) => {
       e.preventDefault()
       onSubmit({email:email.value,password:password.value})
   }
    // para el  resto de opereito  para llamar todo ejemplo el  value y el onChange     
    return (
        <Fragment>

           
            <Form disabled={disabled} onSubmit={hansubmit}> 
            <Title>{title}</Title>
                <Input disabled={disabled} placeholder="Email"  {...email}/>
                <Input disabled={disabled} placeholder="password" type="password"   {...password} />
                <Button disabled={disabled}>{title}</Button> 
                    
            </Form>
            {error && <Error>{error}</Error>}
        </Fragment>
    )
}

