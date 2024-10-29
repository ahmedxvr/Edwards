import { graphql } from "gatsby";

export const QueryFragments = graphql`
  fragment SEO on SanitySeo {
    metaTitle
    metaDesc
    keywords
    shareDesc
    shareTitle
    shareGraphic {
      asset {
        url
      }
    }
  }

  fragment ModuleSettings on SanityModuleSettings {
    paddingTop
    paddingBottom
    slug {
      current
    }
    moduleColor {
      value
    }
  }

  fragment PageRef on SanityDocument {
    ... on SanityHomePage {
      _type
    }

    ... on SanityModularPage {
      _type
      slug {
        current
      }
    }
  }

  fragment PageLink on SanityPageLink {
    _type
    linkText
    page {
      ...PageRef
    }
  }
  fragment PageAnchorLink on SanityPageAnchorLink {
    _type
    linkText
    page {
      ...PageRef
    }
    target {
      current
    }
  }
  fragment AnchorLink on SanityAnchorLink {
    _type
    linkText
    target {
      current
    }
  }
  # Block Zone
  fragment PageModules on SanityPageModules {
    modules {
      ... on SanitySingleColText {
        _key
        _type
        text: _rawText(resolveReferences: { maxDepth: 10 })
        config {
          ...ModuleSettings
        }
        centerText
      }
      ... on SanityTwoColText {
        _key
        _type
        heading
        leftText: _rawLeftText(resolveReferences: { maxDepth: 10 })
        rightText: _rawRightText(resolveReferences: { maxDepth: 10 })
        config {
          ...ModuleSettings
        }
      }
      ... on SanityAccordionSet {
        _key
        _type
        title
        items {
          text: _rawText(resolveReferences: { maxDepth: 10 })
          title
        }
        config {
          ...ModuleSettings
        }
      }
      ... on SanityHalfBanner {
        _key
        _type
        text: _rawText(resolveReferences: { maxDepth: 10 })
        image {
          ...ImageWithPreview
        }
      }
      ... on SanityStoryBlock {
        _key
        _type
        heading
        subheading
      }
      ... on SanityImageText {
        key: _key
        _type
        text: _rawText(resolveReferences: { maxDepth: 10 })
        image {
          ...ImageWithPreview
        }
        layout
        hasSharpBorder
        config {
          ...ModuleSettings
        }
      }
      ... on SanityPageBanner {
        _key
        _type
        tint
        image {
          ...ImageWithPreview
        }
        redText
        text: _rawText(resolveReferences: { maxDepth: 10 })
        buttonGroup
        backgroundColor {
          hex
        }
      }
      ... on SanityQuoteBlock {
        _key
        _type
        quote
        author
        authorTitle
        image {
          ...ImageWithPreview
        }
        config {
          ...ModuleSettings
        }
      }
      ... on SanityJourneyPopup {
        _key
        _type
        title
        subtitle
        mainImage {
          ...ImageWithPreview
        }
        steps {
          title
          content: _rawContent(resolveReferences: { maxDepth: 10 })
          borderedText
          graphic {
            ...ImageWithPreview
          }
        }
        config {
          ...ModuleSettings
        }
      }
      ... on SanityCardGrid {
        _key
        _type
        heading
        subheading
        config {
          ...ModuleSettings
        }
        cards {
          heading
          subheading
          icon {
            ...ImageWithPreview
          }
        }
      }
      ... on SanitySoundCards {
        _key
        _type
        heading
        config {
          ...ModuleSettings
        }
        cards {
          video {
            asset {
              url
            }
          }
        }
      }
      ... on SanityVideoBlock {
        _key
        _type
        heading
        subheading
        video
        thumbnail {
          ...ImageWithPreview
        }
        config {
          ...ModuleSettings
        }
      }
      ... on SanityEchoLocationBlock {
        _key
        _type
        heading
        subText
        config {
          ...ModuleSettings
        }
      }
      ... on SanityFormBlock {
        _key
        _type
        formText: _rawFormText(resolveReferences: { maxDepth: 10 })
        formImage {
          ...ImageWithPreview
        }
        config {
          ...ModuleSettings
        }
      }
      ... on SanityCardBlock {
        _key
        _type
        config {
          ...ModuleSettings
        }
        heading
        subheading
        cards {
          icon {
            ...ImageWithPreview
          }
          cardText: _rawText(resolveReferences: { maxDepth: 10 })
          link {
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
                  slug {
                    current
                  }
                }
              }
              linkText
            }
          }
        }
      }
    }
  }
`;
