import { useQuery } from '@/utils/useQuery'

import Card from '@/app/components/card'
import Grid from '@/app/components/grid'
import Template from '@/app/components/template'

import { getCategory } from './helpers'
import { query } from './query'

export default async function Category({ params }) {
  const data = await useQuery(query, { slug: params.category })

  const { products } = getCategory(data)

  return (
    <Template title='Categories' parent='/'>
      <Grid>
        {products.map((product) => (
          <Card key={product.id} data={product} type='product' />
        ))}
      </Grid>
    </Template>
  )
}
