import React from 'react';
import { Link } from 'gatsby';

// Components
import { PageMeta } from '@components/pageMeta';
import Layout from '@components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <PageMeta
        metaTitle='404: Not Found'
        metaDescription="We can't seem to find the page you are looking for."
      />
      <div className='py-40 md:py-64 xl:py-80 flex flex-col items-center text-center gap-8 max-w-5xl mx-auto'>
        <h1 className='text-sm lg:text-base font-bold'>404</h1>
        <h2 className='text-3xl md:text-5xl lg:text-7xl uppercase'>
          We can't seem to find the page you are looking for.
        </h2>
        <Link
          to='/'
          className='px-12 py-4 border-current border rounded-lg uppercase'
        >
          Go back to home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
