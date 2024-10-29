/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './IframePreview.module.css';

/**
 * Explore more examples of previews:
 * https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes
 */

const assemblePostUrl = ({ displayed, options }) => {
  const { _type, slug } = displayed;

  const { previewURL } = options;
  if ((_type === 'standardPage' && !slug) || !previewURL) {
    console.warn('Missing slug or previewURL', { slug, previewURL });
    return '';
  }

  const path = (_type) => {
    switch (_type) {
      case 'homePage':
        return '';
      case 'product':
        return `products/${slug.current}`;
      case 'bundleProduct':
        return `products/${slug.current}`;
      case 'blog':
        return `/${slug.current}`;
      case 'collection':
        return `collections/${slug.current}`;
      default:
        return `${slug.current}`;
    }
  };

  return `${previewURL}/${path(_type)}`;
};

const IframePreview = (props) => {
  const { options } = props;
  const { displayed } = props.document;

  if (!displayed) {
    return (
      <div className={styles.componentWrapper}>
        <p>There is no document to preview</p>
      </div>
    );
  }

  const url = assemblePostUrl({ displayed, options });

  if (!url) {
    return (
      <div className={styles.componentWrapper}>
        <p>Hmm. Having problems constructing the web front-end URL.</p>
      </div>
    );
  }

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={'0'} />
      </div>
    </div>
  );
};

IframePreview.propTypes = {
  document: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

IframePreview.defaultProps = {
  document: null,
};

export default IframePreview;
