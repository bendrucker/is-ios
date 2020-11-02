'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  t.equal(require('./'), false)
  t.equal(proxyquire('./', {
    'global/window': {
      navigator: {
        userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
      }
    }
  }), true)
  t.end()
})
