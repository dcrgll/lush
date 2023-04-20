export function getCategories(data) {
  return data?.categories?.edges?.map((edge) => edge.node) || []
}
