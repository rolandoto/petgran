import { gql } from 'apollo-boost'
import React from 'react'
import { Query } from 'react-apollo'
import { Photo_card } from '../Component/photo-card/Photo_card'




const GET_SINGLE_PHOTO = gql`
query getsinglePhotos($id:ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`


const RenderProps =  ({loading,error,data}) =>{
    if(loading)
   
    return <p>loading</p>
    if(error) return <p>error</p>     
    const {photo = {}}  = data
       return <Photo_card  {...photo} />
    }   
    

export const PhotosWitgQuery = ({id}) => (

    <Query query={GET_SINGLE_PHOTO} variables={{id}}> 

    {RenderProps}
   
    </Query>

)
        
   
           

               
               
              
     
