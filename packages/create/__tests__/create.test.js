'use strict'
const { describe, expect, test } = require('@jest/globals')
const create = require('..')

describe('@lerna/create', () => {
  it('test xjh-lerna', () => {
    expect(create()).toBe('create')
  })
})
