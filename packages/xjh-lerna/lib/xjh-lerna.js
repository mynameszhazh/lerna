'use strict'

module.exports = main

const cli = require('@xjh-lerna/cli')
const initCmd = require('@xjh-lerna/init/command')
const createCmd = require('@xjh-lerna/create/command')

function main(argv) {
  return cli().command(initCmd).command(createCmd).parse(argv)
}
