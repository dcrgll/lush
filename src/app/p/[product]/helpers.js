export function getProduct(data) {
  return data.product
}

export function getPrice(data) {
  return {
    currency: data.product.pricing.priceRangeUndiscounted.start.currency,
    amount: data.product.pricing.priceRangeUndiscounted.start.gross.amount
  }
}

export function getDescription(data) {
  return JSON.parse(data.product.description)
}

export function getImage(data) {
  return data.product.thumbnail
}
