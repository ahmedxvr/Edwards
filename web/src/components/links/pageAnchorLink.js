import React from "react"
import { Link } from "gatsby"
import { useSanityPath } from "@hooks"

const PageAnchorLink = ({ page, linkText, target, children, ...rest }) => {
  const path = useSanityPath(page)

  return (
    <Link to={`/${path}#${target && target.current}`} {...rest}>
      {linkText || children}
    </Link>
  )
}

export default PageAnchorLink
