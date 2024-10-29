export const usePadBottom = size => {
  switch (size) {
    case "small":
      return "pb-20 md:pb-40"
    case "medium":
      return "pb-40 md:pb-64"
    case "large":
      return "pb-64 md:pb-96"
    default:
      return null
  }
}
