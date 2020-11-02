'use strict'

var navigator = require('global/window').navigator

module.exports = typeof navigator !== 'undefined' &&
  (/iPad|iPhone|iPod/.test(navigator.userAgent || '') ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) // iPad iOS 13
