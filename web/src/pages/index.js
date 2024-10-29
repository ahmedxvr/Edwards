import React from "react"
import { graphql } from "gatsby"

// Hooks Querys & Context
import { QueryFragments } from "@querys/queryFragments" // eslint-disable-line

import ModuleZone from "~moduleZone"
import Layout from "@components/layout"
import { PageMeta } from "@components/pageMeta"

const IndexPage = ({ data: { page } }) => {
  const { pageModules, settings, seo } = page || {}

  return (
    <Layout {...settings}>
      <PageMeta {...seo} />
      {pageModules && <ModuleZone {...pageModules} />}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query homePageQuery {
    page: sanityHomePage {
      seo {
        ...SEO
      }
      pageModules: modules {
        ...PageModules
      }
      settings:pageConfig {
        reverseHeader
      }
    }
  }
`
