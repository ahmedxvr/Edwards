import { useStaticQuery, graphql } from "gatsby";

export const useSiteConfig = () => {
  const { sanitySettingsNav, sanitySettingsFooter } = useStaticQuery(graphql`
    query {
      sanitySettingsNav {
        mainMenu {
          page {
            ... on SanityModularPage {
              id
              _type
              slug {
                current
              }
            }
            ... on SanityBlogPortal {
              id
              _type
              slug {
                current
              }
            }
            ... on SanityBlog {
              id
              _type
              slug {
                current
              }
            }
          }
          linkText
          _type
        }
        dropdownMenuTitle
        dropdownMenu {
          page {
            ... on SanityModularPage {
              id
              _type
              slug {
                current
              }
            }
            ... on SanityBlogPortal {
              id
              _type
              slug {
                current
              }
            }
            ... on SanityBlog {
              id
              _type
              slug {
                current
              }
            }
          }
          linkText
          _type
        }
      }
      sanitySettingsFooter {
        footerLinks {
          ... on SanityExternalLink {
            _key
            _type
            linkText
            url
          }
          ... on SanityPageLink {
            _key
            _type
            page {
              ... on SanityModularPage {
                id
                _type
                slug {
                  current
                }
              }
              ... on SanityBlogPortal {
                id
                slug {
                  current
                }
                _type
              }
              ... on SanitySimplePage {
                id
                _type
                slug {
                  current
                }
              }
            }
            linkText
          }
        }
        address
        phone
        email
        socialLinks {
          icon {
            ...ImageWithPreview
          }
          url
        }
      }
    }
  `);
  return { header: sanitySettingsNav, footer: sanitySettingsFooter } || {};
};
