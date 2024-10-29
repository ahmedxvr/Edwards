export const useSanityPath = props => {
  const { _type, main, slug } = props || {}

  function getPath(_type, slug, main) {
    switch (_type) {
      case "modularPage":
        return `/${slug?.current}`
      case "simplePage":
        return `/${slug?.current}`
      case "blogPortal":
        return `/${slug?.current}`
      case "blog":
        return `/${slug?.current}`
      case "homePage":
        return `/`
      default:
        return null
    }
  }

  const path = getPath(_type, slug, main)

  return path
}
