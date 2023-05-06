
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./faisaa-sdk.cjs.production.min.js')
} else {
  module.exports = require('./faisaa-sdk.cjs.development.js')
}
