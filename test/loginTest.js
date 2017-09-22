var assert = require('chai').assert
describe('otrak', function () {
    var M = require('./manager')
    describe('login', function() {
        it('login(ccc, 1111)===undefined', function () {
            assert.isUndefined(M.login('ccc', '1111'))
        })
        it('login(ccc, 1234567).id=ccc', function () {
            assert.equal('ccc', M.login('ccc', '1234567').id)
        }) 
        it('login(leo, 1234567)====undefined', function () {
            assert.isUndefined(M.login('leo', '1234567'))
        }) 
  })
})