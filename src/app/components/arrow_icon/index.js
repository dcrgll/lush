import Link from 'next/link'
import PropTypes from 'prop-types'

export default function ArrowIcon({ href }) {
  return (
    <Link href={href}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
        />
      </svg>
    </Link>
  )
}

ArrowIcon.propTypes = {
  href: PropTypes.string.isRequired
}
