import React from 'react';
import { graphql } from 'gatsby';

import { QueryFragments } from '@querys/queryFragments'; // eslint-disable-line

// Components
import Layout from '@components/layout';
import { PageMeta } from '@components/pageMeta';
import { FeaturedBlogCard } from '../components/cards/featuredBlogCard';
import { BlogCard } from '../components/cards/blogCard';
import { useBlogQuery } from '../GraphQl/useBlogQuery';

const PortalTemplate = ({ data: { page } }) => {
  const { seo, title } = page || {};
  const { blogs } = useBlogQuery();
  return (
    <Layout>
      <PageMeta {...seo} />
      <div className='bg-grey'>
        <h1 className='blockH0 pt-44 md:pt-72 pb-20 md:pb-44 text-red px-gutter text-center'>
          {title}
        </h1>
        <FeaturedBlogCard {...blogs[0]} />
        <div className='pt-20 md:pt-32 pb-32 md:pb-40 px-gutter grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-[75px] md:gap-y-24'>
          {blogs.slice(1).map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PortalTemplate;

export const portalQuery = graphql`
  query standardBlogPortalQuery($slug: String!) {
    page: sanityBlogPortal(slug: { current: { eq: $slug } }) {
      seo {
        ...SEO
      }
      title
    }
  }
`;
