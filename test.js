const assert = require('assert')

describe('global leak', function () {

  before(function() {
    global.foo = 'bar'
  })

  it('should allow global leak if provided in mocha options.global', function() {
    assert.equal(global.foo, 'bar')
  })

  after(function() {
    delete global.foo
  })

})
