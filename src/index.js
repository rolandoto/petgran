
import  ApolloClient  from 'apollo-boost';
import React from 'react'
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom'
import {App}  from './App'
import Context from './Context';


const client = new ApolloClient({
  uri: "https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql"
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
