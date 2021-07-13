import { Fragment } from "react"
import React from 'react'
import { ListCategory } from "../Component/lISTCATEGORY/ListCategory"
import { ListoComponent } from "../containers/ListOfcad"

export const Home = ({id}) => {
    //este id viene de App como props 
     //CATEGORIA
    return (
        <Fragment>
        <ListCategory/> 
        <ListoComponent categoryId={id}/>
        {/* aqui le envia el props  a graphql para cambiar todo el categoris de animales */}
        </Fragment>
    )
}