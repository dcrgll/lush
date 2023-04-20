import Link from 'next/link'
import { useQuery } from '@/utils/useQuery'

import { getDescription, getImage, getPrice, getProduct } from './helpers'
import { query } from './query'

export default async function ProductPage({ params }) {
  const data = await useQuery(query, {
    slug: params.product
  })

  const { name, category } = getProduct(data)
  const { currency, amount } = getPrice(data)
  const { alt, url } = getImage(data)
  const description = getDescription(data)

  return (
    <div>
      <Link href={`/c/${category.slug}`}>{category.name}</Link>

      <img src={url} alt={alt} />
      <h1>{name}</h1>
      <ul>
        {description.blocks.map((block) => (
          <li key={block.id}>
            <div dangerouslySetInnerHTML={{ __html: block.data.text }} />
          </li>
        ))}
      </ul>
      <div>
        {amount}
        {currency}
      </div>
    </div>
  )
}
