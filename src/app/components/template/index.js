import PropTypes from 'prop-types'

import ArrowIcon from '@/app/components/arrow_icon'

export default function Template({ children, title, parent }) {
  function renderArrowIcon() {
    if (!parent) return null
    return <ArrowIcon href={parent} />
  }

  function renderTitle() {
    return (
      <h1 className='text-2xl font-bold tracking-tight text-gray-900'>
        {title}
      </h1>
    )
  }

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        {renderArrowIcon()}
        {renderTitle()}
        {children}
      </div>
    </div>
  )
}

Template.defaultProps = {
  parent: ''
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  parent: PropTypes.string
}
