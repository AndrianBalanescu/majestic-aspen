// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import header from './header.js';
import footer from './footer.js';
import home from './home.js';
import elements from './elements.js';
import action from './action.js';
import section from './section.js';
import icons from './icons.js';
import spotlights from './spotlights.js';
import cta from './cta.js';
import icon from './icon.js';
import palette from './palette.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    header,
    footer,
    home,
    elements,
    action,
    section,
    icons,
    spotlights,
    cta,
    icon,
    palette
    ])
})
