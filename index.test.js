const { expect } = require('chai');
const { foo } = require('./index');

describe('foo', () => {
  it('is a function', () => {
    expect(foo).to.be.a('function')
  })
})