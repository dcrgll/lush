'use client'

import { addToCart } from './helpers'

export default function Button() {
  return (
    <button
      type='button'
      className='bg-black px-8 py-4 text-white'
      onClick={addToCart}
    >
      Add to cart
    </button>
  )
}
