
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ui_kit_test.cjs.production.min.js')
} else {
  module.exports = require('./ui_kit_test.cjs.development.js')
}
