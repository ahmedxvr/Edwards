export const usePadTop = size => {
  switch (size) {
    case "small":
      return "pt-20 md:pt-40"
    case "medium":
      return "pt-40 md:pt-64"
    case "large":
      return "pt-64 md:pt-96"
    default:
      return null
  }
}
