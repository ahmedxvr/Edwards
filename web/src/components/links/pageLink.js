import React from "react"
import { Link } from "gatsby"
import { useSanityPath } from "@hooks"

const PageLink = ({ page, linkText, children, ...rest }) => {
  const path = useSanityPath(page)
  return (
    <Link to={path} {...rest}>
      {linkText || children}
    </Link>
  )
}

export default PageLink
