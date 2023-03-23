'use strict'

const init = require('..')

describe('@lerna/init', () => {
  it('test init', () => {
    expect(init()).toBe('init')
  })
})
