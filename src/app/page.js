import { useQuery } from '@/utils/useQuery'

import Card from '@/app/components/card'
import Grid from '@/app/components/grid'
import Template from '@/app/components/template'

import { getCategories } from './helpers'
import { query } from './query'

export default async function HomePage() {
  const data = await useQuery(query)
  const categories = getCategories(data)

  return (
    <Template title='Home'>
      <Grid>
        {categories.map((category) => (
          <Card key={category.id} data={category} type='category' />
        ))}
      </Grid>
    </Template>
  )
}

// query ($channel: String) {
//   products(channel: $channel, first: 20) {
//     edges {
//       node {
//         slug
//         name
//         channel
//       }
//     }
//   }
// }

// get products
// query ($channel: String,){
//   products(first: 20, channel: $channel){
//     edges{
//       node{
//         slug
//       }
//     }
//   }
// }
