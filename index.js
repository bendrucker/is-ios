'use strict'

var navigator = require('global/window').navigator

module.exports = (function detect_iOS (userAgent) {
  return /iPad|iPhone|iPod/.test(userAgent)
})(navigator ? navigator.userAgent : '')
