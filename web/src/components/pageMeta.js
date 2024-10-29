import React from "react"
import SEO from "./seo"

export const PageMeta = ({
  metaTitle,
  metaDesc,
  shareDesc,
  shareTitle,
  shareGraphic,
  keywords,
}) => {
  return (
    <SEO
      title={metaTitle}
      description={metaDesc}
      shareDesc={shareDesc}
      shareTitle={shareTitle}
      keywords={keywords}
      image={shareGraphic}
    />
  )
}
