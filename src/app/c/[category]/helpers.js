export function getCategory(data) {
  return {
    name: data?.category?.name,
    products: data?.category?.products?.edges?.map((edge) => edge.node) || []
  }
}
