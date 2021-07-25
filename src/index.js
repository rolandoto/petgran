
import  ApolloClient  from 'apollo-boost';
import React from 'react'
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom'
import {App}  from './App'
import Context from './Context';


const client = new ApolloClient({
  uri: "https://petgram-server-alexander.vercel.app/graphql",
  //like tiene que esatr logeado para hacer un like conn el token 
  request: operation => {
    //  
      const token = window.sessionStorage.getItem('token')
      const authorization = token ? `Bearer ${token}` : ''
      operation.setContext({
        headers:{
          authorization
        }
      })
  } ,
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})




//aqui envua como props
ReactDOM.render(
  <Context.Provider >
 <ApolloProvider client={client}>
   <App/>
   </ApolloProvider>
   </Context.Provider>,
  document.getElementById('root')
);
