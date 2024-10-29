import { useStaticQuery, graphql } from 'gatsby';

export const useBlogQuery = () => {
    const {
        allSanityBlog,
        sanityBlogPortal
    } = useStaticQuery(graphql`
    query {
        sanityBlogPortal {
            slug {
                current
            }
        }
        allSanityBlog(sort: {fields: [date], order: DESC}) {
            nodes {
                date(locale: "NZ", formatString: "DD MMMM YYYY")
                excerpt
                feautuedImage {
                    ...ImageWithPreview
                }
                slug {
                    current
                }
                title
                    content:_rawContent(resolveReferences: {maxDepth: 10})
                }
            }
        }
  `);
    return { blogs: allSanityBlog?.nodes, portal: sanityBlogPortal } || {};
};