const getDocPath = function ({ _type, slug }) {
  switch (_type) {
    case 'homePage':
      return '';
    case 'modularPage':
      return `${slug.current}`;
    default:
      return '';
  }
};

const remoteURL = 'https://preview-edwards.gtsb.io/';
const localURL = 'http://localhost:8000';
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL;

export default function resolveProductionUrl(document) {
  const path = getDocPath(document);
  return `${previewURL}/${path}`;
}
