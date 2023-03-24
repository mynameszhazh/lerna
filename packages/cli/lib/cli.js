'use strict'
const yargs = require('yargs/yargs')

function lernaCLI() {
  const cli = yargs()

  // 所有命令的全局选项
  const globalOptions = {
    logLevel: {
      type: 'string',
      describe: '日志的级别',
      defaultDescription: 'info',
      alas: 'L'
    }
  }
  const globalKeys = Object.keys(globalOptions).concat(['help', 'version'])

  return cli
    .options(globalOptions)
    .group(globalKeys, 'Global Options:')
    .usage(`Usage: $0 <command> [options]`)
    .demandCommand(1, '至少需要一个命令')
    .strict()
    .recommendCommands()
    .fail((msg, err) => {
      console.error(msg)
      console.error(err)
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .version('1.0.0')
    .epilogue('hell')
}

module.exports = lernaCLI
