export const query = `
  query ($slug: String) {
    product(channel: "uk",  slug: $slug) {
		  id
      name
      description
      pricing{
        onSale
        displayGrossPrices
      }
    }
  }
`
