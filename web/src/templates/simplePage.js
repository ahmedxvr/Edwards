import React from "react"
import { graphql } from "gatsby"

import { QueryFragments } from "@querys/queryFragments" // eslint-disable-line

// Components
import Layout from "@components/layout"
import { PageMeta } from "@components/pageMeta"
import { SimplePortableText } from "@components/sanity/simplePortableText"

const simplePageTemplate = ({ data: { page } }) => {
  const { seo, text } = page || {}

  return (
    <Layout className='bg-grey'>
      <PageMeta {...seo} />
      <div className="min-h-[100vh] px-gutter lg:mx-gutter">
        {text && <SimplePortableText text={text} className="mt-space-l mb-space-m" />}
      </div>
    </Layout>
  )
}

export default simplePageTemplate

export const simpePageQuery = graphql`
  query standardSimplePageQuery($slug: String!) {
    page: sanitySimplePage(slug: { current: { eq: $slug } }) {
      seo {
        ...SEO
      }
      text:_rawText(resolveReferences: { maxDepth: 10 })
    }
  }
`
