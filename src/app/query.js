export const query = `
  query {
    categories(first: 20) {
      edges {
        node {
          slug
          name
          description
        }
      }
    }
  }
`
