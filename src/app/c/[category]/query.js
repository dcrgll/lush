export const query = `
  query ($slug: String!) {
    category(slug: $slug) {
      products(channel: "uk", first: 20) {
        edges {
          node {
            id
            slug
            name
            pricing {
              priceRangeUndiscounted {
                start {
                  gross {
                    amount
                    currency
                  }
                }
              }
            }
            thumbnail {
              url
              alt
            }
          }
        }
      }
      name
      slug
    }
  }
`
