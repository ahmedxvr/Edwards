import React from "react";
import { graphql } from "gatsby";

import { QueryFragments } from "@querys/queryFragments"; // eslint-disable-line

// Components
import { PageMeta } from "@components/pageMeta";
import ModuleZone from "~moduleZone";
import Layout from "@components/layout";

const PageTemplate = ({ data: { page } }) => {
  const { pageModules, seo, settings } = page || {};

  return (
    <Layout {...settings}>
      <PageMeta {...seo} />
      {pageModules && <ModuleZone {...pageModules} />}
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query standardPageQuery($slug: String!) {
    page: sanityModularPage(slug: { current: { eq: $slug } }) {
      seo {
        ...SEO
      }
      pageModules: modules {
        ...PageModules
      }
      settings: pageConfig {
        reverseHeader
      }
    }
  }
`;
