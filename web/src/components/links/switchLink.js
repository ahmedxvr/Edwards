import React from "react"
import loadable from "@loadable/component"

const PageLink = loadable(() => import("./pageLink"))
const AnchorScrollLink = loadable(() => import("./anchorScrollLink"))
const PageAnchorLink = loadable(() => import("./pageAnchorLink"))
const ExternalLink = loadable(() => import("./externalLink"))

const LinkComponent = ({ _type, ...rest }) => {
  switch (_type) {
    case "externalLink":
      return <ExternalLink {...rest} />
    case "pageLink":
      return <PageLink {...rest} />
    case "pageAnchorLink":
      return <PageAnchorLink {...rest} />
    case "anchorLink":
      return <AnchorScrollLink {...rest} />
    default:
      return null
  }
}
const SwitchLink = props => {
  return <LinkComponent {...props} />
}

export default SwitchLink
