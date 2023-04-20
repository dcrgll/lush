import Link from 'next/link'
import { useQuery } from '@/utils/useQuery'

import Button from '@/app/components/button'
import Template from '@/app/components/template'

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
    <Template title={name} parent={`/c/${category.slug}`}>
      <Link href={`/c/${category.slug}`}>{category.name}</Link>

      <img src={url} alt={alt} />

      <ul>
        {description?.blocks.map((block) => (
          <li key={block.id}>
            <div dangerouslySetInnerHTML={{ __html: block.data.text }} />
          </li>
        ))}
      </ul>

      <div className='mt-2 flex flex-col'>
        <strong>
          {amount}
          {currency}
        </strong>
        <Button />
      </div>
    </Template>
  )
}
