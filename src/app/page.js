import Link from 'next/link'
import { useQuery } from '@/utils/useQuery'

import { getCategories } from './helpers'
import { query } from './query'

export default async function HomePage() {
  const data = await useQuery(query)

  const categories = getCategories(data)

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/c/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
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
