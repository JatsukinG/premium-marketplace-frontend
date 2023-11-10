import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import 'preline'
import App from './App.jsx'

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_API_GRAPHQL_URL}`,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </React.StrictMode>,
)
