import React, { Fragment, useState } from 'react'
import { UseInput } from '../Hooks/Useinput'
import { Button, Form,Input,Title } from './style'



export const Useform = ({onSubmit,title}) => {

   const email =  UseInput('')
   const password = UseInput('')

   const hansubmit  = (e) => {
       e.preventDefault()
       onSubmit({email:email.value,password:password.value})
   }
    // para el  resto de opereito  para llamar todo ejemplo el  value y el onChange     
    return (
        <Fragment>

            <Title>{title}</Title>
            <Form onSubmit={hansubmit}> 
                <Input placeholder="Email"  {...email}/>
                <Input placeholder="password" type="password"   {...password} />
                <Button>{title}</Button> 
                    
            </Form>
        </Fragment>
    )
}

