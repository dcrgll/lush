export const query = `
query ($slug: String!) {
  category(slug: $slug) {
    products(channel: "uk", first: 20) {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
    name
    slug
  }
}
`
