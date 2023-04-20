import { gql } from '@apollo/client'

import { getClient } from '@/lib/apollo'

export async function useQuery(query, variables) {
  const client = getClient()
  const { data } = await client.query({
    query: gql(query),
    variables
  })

  return data
}
