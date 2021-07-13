import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'



const GET_PHOTOS = gql`
query getpotohos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`


//aqui lo envia para un listOfcards
export const withPhtos  = graphql(GET_PHOTOS)

  
 