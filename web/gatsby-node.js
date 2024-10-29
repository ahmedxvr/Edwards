const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~moduleZone": path.resolve(
          __dirname,
          `src/components/pageModules/moduleZone.js`
        ),
        "@components": path.resolve(__dirname, `src/components/`),
        "@css": path.resolve(__dirname, `src/css`),
        "@lib": path.resolve(__dirname, `src/lib/`),
        "@querys": path.resolve(__dirname, `src/GraphQl/`),
        "@hooks": path.resolve(__dirname, `src/hooks/`),
        "@svg": path.resolve(__dirname, `src/svg`),
        "@images": path.resolve(__dirname, `src/images`),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const querys = await graphql(`
    {
      allSanityModularPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanitySimplePage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityRedirect {
        edges {
          node {
            from
            to
            isPermanent
          }
        }
      }
      allSanityBlogPortal {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityBlog {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // Redirects
  console.log('Create Redirects');
  const redirects = querys?.data?.allSanityRedirect?.edges || [];
  redirects.forEach((edge, index) => {
    const { from, to, isPermanent } = edge.node || {};
    createRedirect({
      fromPath: from,
      toPath: to,
      isPermanent,
    });
  });

  // Generate Pages
  console.log("Generate Pages");
  const pages = querys?.data?.allSanityModularPage?.edges || [];
  pages.forEach((edge, index) => {
    const path = `/${edge?.node?.slug?.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { slug: edge?.node?.slug?.current },
    });
  });
  // Generate Simple Pages
  console.log("Generate Simple Pages");
  const simplePages = querys?.data?.allSanitySimplePage?.edges || [];
  simplePages.forEach((edge, index) => {
    const path = `/${edge?.node?.slug?.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/simplePage.js"),
      context: { slug: edge?.node?.slug?.current },
    });
  });
  // Generate Blog Portal
  console.log("Generate Blog Portal");
  const portals = querys?.data?.allSanityBlogPortal?.edges || [];
  portals.forEach((edge, index) => {
    const path = `/${edge?.node?.slug?.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/blogPortal.js"),
      context: { slug: edge?.node?.slug?.current },
    });
  });
  // Generate Blogs
  console.log("Generate Blogs");
  const blogs = querys?.data?.allSanityBlog?.edges || [];
  blogs.forEach((edge, index) => {
    const path = `/${edge?.node?.slug?.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/blog.js"),
      context: { slug: edge?.node?.slug?.current },
    });
  });
};
