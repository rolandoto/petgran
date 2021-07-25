import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { ListOfFavs } from '../Component/ListOffavs.js/ListOffavs'
    



const GET_FAV = gql`
    query  getFAVS {
        favs{
            id
            categoryId
            src
            likes
            userId
        }
    }
`
  
const renderprops = ({loading,error,data}) =>{
    if(loading) return <p>cargando</p>

    if(error) return <p>error</p>

    const {favs} = data

    return <ListOfFavs  favs={favs}/>

}
//fecthpolicy="cache-and-network" va a la red obtiene una version fesca q alacecen en el capche este
//es mejor por si hay acceso office a la app 
export const Favswiquery = ({id}) => (

    <Query query={GET_FAV} fetchPolicy='network-only' variables={{id}}>
        {renderprops }
    </Query>
)