  
import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const REGISTER = gql`
mutation signu($input: UserCredentials!) {
    signup(input: $input)
 }
`

export const RegisterMutation = ({ children }) => {
  return (
    <Mutation mutation={REGISTER}>
      {children}
    </Mutation>
  )
}