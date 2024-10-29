require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const isProd = process.env.NODE_ENV === "production";
const previewEnabled =
  (process.env.GATSBY_IS_PREVIEW || "false").toLowerCase() === "true";

module.exports = {
  siteMetadata: {
    title: `Edwards`,
    description: `Listen to your heart`,
    author: `BraveDigital`,
    siteUrl: "https://www.listentoyourheart.co.nz",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure  properly
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_GATSBY_TOKEN,
        watchMode: !isProd, // watchMode only in dev mode
        overlayDrafts: !isProd || previewEnabled, // drafts in dev & Gatsby Cloud Preview
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        customImageTypes: ["SanityFigure"],
        altFieldName: "altText",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "edwards-listen-to-your-heart",
        short_name: "edwards",
        start_url: "/",
        background_color: `#CE2E49`,
        theme_color: `#CE2E49`,
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [
              { userAgent: "*", allow: "/", disallow: ["/health-survey"] },
            ],
          },
          production: {
            policy: [
              { userAgent: "*", allow: "/", disallow: ["/health-survey"] },
            ],
          },
        },
      },
    },
  ],
};
