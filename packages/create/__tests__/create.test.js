'use strict'

const create = require('..')

describe('@lerna/create', () => {
  it('test xjh-lerna', () => {
    expect(create()).toBe('create')
  })
})
