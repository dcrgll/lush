import Link from 'next/link'
import PropTypes from 'prop-types'

import { getImage, getLink } from './helpers'

export default function Card({ data, type }) {
  const { url, alt } = getImage(data)

  function renderImage() {
    if (url) {
      return (
        <img
          src={url}
          alt={alt}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      )
    }
  }

  function renderPricing() {
    if (type !== 'product') return null

    return (
      <p className='text-sm font-medium text-gray-900'>
        {data.pricing.priceRangeUndiscounted.start.gross.amount}
        {data.pricing.priceRangeUndiscounted.start.gross.currency}
      </p>
    )
  }

  function renderTitle() {
    return (
      <div>
        <h3 className='text-sm text-gray-700'>
          <Link href={getLink(data, type)}>
            <span aria-hidden='true' className='absolute inset-0' />
            {data.name}
          </Link>
        </h3>
      </div>
    )
  }

  return (
    <div className='group relative'>
      <div className='min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        {renderImage()}
      </div>

      <div className='mt-4 flex justify-between'>
        {renderTitle()}
        {renderPricing()}
      </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.oneOf(['category', 'product']).isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }).isRequired,
    pricing: PropTypes.shape({
      priceRangeUndiscounted: PropTypes.shape({
        start: PropTypes.shape({
          gross: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}
