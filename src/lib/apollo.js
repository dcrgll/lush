import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

let client

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri: process.env.GRAPHQL_ENDPOINT
      }),
      cache: new InMemoryCache()
    })
  }

  return client
}
