const yargs = require('yargs/yargs')

const argv = process.argv.slice(2)
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

cli
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
  .command({
    command: 'create <name>',
    describe: '创建一个lerna管理的包',
    builder: (yargs) => {
      yargs
        .positional('name', {
          type: 'string'
        })
        .options({
          registry: {
            group: 'Command Groups:',
            describe: '配置包发布的仓库地址',
            type: 'string'
          }
        })
    },
    handler: (argv) => {
      console.log('执行了init命令', argv)
    }
  })
  .parse(argv)
