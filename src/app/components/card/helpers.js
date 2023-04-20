export function getImage(data) {
  return (
    data?.thumbnail ||
    data?.backgroundImage || {
      url: '',
      alt: ''
    }
  )
}

export function getLink(data, type) {
  if (type === 'product') {
    return `/p/${data?.slug}`
  }

  return `/c/${data?.slug}`
}
