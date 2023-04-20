import Link from 'next/link'
import { useQuery } from '@/utils/useQuery'

import { getProduct } from './helpers'
import { query } from './query'

export default async function ProductPage({ params }) {
  const data = await useQuery(query, {
    slug: params.product
  })

  const product = getProduct(data)

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}
