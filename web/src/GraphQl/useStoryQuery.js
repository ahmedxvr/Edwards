import { useStaticQuery, graphql } from 'gatsby';

export const useStoryQuery = () => {
    const {
        allSanityStoryCategory,
        allSanityStory
    } = useStaticQuery(graphql`
    query {
        allSanityStoryCategory(sort: {order: ASC, fields: orderRank}) {
            nodes {
                title
            }
        }
        allSanityStory {
            nodes {
                video
                thumbnail{
                    ...ImageWithPreview
                }
                slug {
                    current
                }
                heading
                blurb
                category {
                    title
                }
            }
        }
    }
  `);
    return { categories: allSanityStoryCategory?.nodes, stories: allSanityStory?.nodes } || {};
};