'use strict'

exports.command = 'create <name>'

exports.describe = 'Create a new lerna-managed package'

exports.builder = (yargs) => {
  console.log('create builder', yargs)
  yargs
    .positional('name', {
      describe:
        'The package name (including scope), which must be locally unique _and_ publicly available',
      type: 'string'
    })
    .positional('loc', {
      describe:
        'A custom package location, defaulting to the first configured package location',
      type: 'string'
    })
    .options({
      registry: {
        group: 'Command Groups',
        describe: '配置报的仓库地址',
        type: 'string'
      }
    })
}

exports.handler = function handler(argv) {
  return require('.')(argv)
}
