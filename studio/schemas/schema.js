// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import svgUploadPreview from 'sanity-plugin-inline-svg';

// Objects
import * as objects from './objects';
const allObjects = Object.values(objects).map((item) => {
  return { ...item };
});
// Modules
import * as modules from './modules';
const allModules = Object.values(modules).map((item) => {
  return { ...item };
});
//Types
import * as types from './documents';
const allTypes = Object.values(types).map((item) => {
  return { ...item };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat(allObjects)
    .concat(allModules)
    .concat(allTypes)
    .concat(svgUploadPreview),
});
