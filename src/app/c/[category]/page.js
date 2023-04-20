import Link from 'next/link'
import { useQuery } from '@/utils/useQuery'

import { getCategory } from './helpers'
import { query } from './query'

export default async function Category({ params }) {
  const data = await useQuery(query, { slug: params.category })

  const category = getCategory(data)
  const { products } = category

  console.log(category)
  return (
    <div>
      <h1>Category</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/p/${product.slug}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
