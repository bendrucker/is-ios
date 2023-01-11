'use strict'

var navigator = require('global/window').navigator

module.exports = typeof navigator !== 'undefined' &&
 (/iphone|ipad|ipod/i).test(window.navigator.userAgent.toLowerCase()) || 
  (navigator.platform.toLowerCase().startsWith("mac") && navigator.maxTouchPoints > 1)) // iPad iOS 13
