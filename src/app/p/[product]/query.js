export const query = `
query ($slug: String) {
  product(channel: "uk", slug: $slug) {
    id
    name
    description
    thumbnail {
      url
      alt
    }
    category {
      slug
      name
    }
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          currency
          gross {
            amount
          }
        }
      }
    }
  }
}
`
