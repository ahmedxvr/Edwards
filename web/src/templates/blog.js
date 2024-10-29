import React from 'react';
import { graphql } from 'gatsby';

import { QueryFragments } from '@querys/queryFragments'; // eslint-disable-line

// Components
import Layout from '@components/layout';
import { PageMeta } from '@components/pageMeta';
import { Intro } from '@components/blog/intro';
import { Content } from '@components/blog/content';
import { OtherBlogs } from '../components/blog/otherBlogs';

const BlogTemplate = ({ data: { page } }) => {
  const { seo, title, feautuedImage, content, author, date, slug } = page || {};

  return (
    <Layout>
      <PageMeta {...seo} />
      <Intro title={title} feautuedImage={feautuedImage} />
      <Content content={content} author={author} date={date} />
      <OtherBlogs currentBlog={slug?.current} />
    </Layout>
  );
};

export default BlogTemplate;

export const blogQuery = graphql`
  query standardBlogQuery($slug: String!) {
    page: sanityBlog(slug: { current: { eq: $slug } }) {
      seo {
        ...SEO
      }
      title
      date(locale: "NZ", formatString: "DD MMMM YYYY")
      feautuedImage {
        ...ImageWithPreview
      }
      content: _rawContent(resolveReferences: { maxDepth: 10 })
      author
      slug {
        current
      }
    }
  }
`;
