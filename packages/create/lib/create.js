const path = require('path')
const fs = require('fs-extra')
// 子进程的一些执行
// const execa = require('execa')

const initPackageJson = require("pify")(require("init-package-json"));
class CreateCommand {
  constructor(options) {
    this.options = options
    this.rootPath = path.resolve()
  }
  async execute() {
    // registry
    const { name } = this.options
    const targetDir = path.join(this.rootPath, `packages/${name}`)
    this.libDir = path.join(targetDir, 'lib')
    this.testDir = path.join(targetDir, '__tests__')
    await fs.mkdirp(this.libDir)
    await fs.mkdirp(this.testDir)
    await initPackageJson(this.targetDir, '')
  }
}

function factory(argv) {
  return new CreateCommand(argv).execute()
}

module.exports = factory
