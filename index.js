'use strict'

var navigator = require('global/window').navigator

module.exports = (
  /iPad|iPhone|iPod/.test(navigator.userAgent || '') ||
  (navigator && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) // iPad iOS 13
)
