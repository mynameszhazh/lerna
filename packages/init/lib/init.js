const path = require('path')
const fs = require('fs-extra')
// 子进程的一些执行
const execa = require('execa')
class InitCommand {
  constructor(options) {
    this.options = options
    this.rootPath = path.resolve()
  }

  async execute() {
    console.info('initalizing git repository')
    await execa('git', ['init'], { stdio: 'pipe' })
    await this.ensurePackageJSON()
    await this.ensureLernaConfig()
    await this.ensurePackagesDir()
  }
  async ensurePackageJSON() {
    console.info('创建package.json')
    await fs.writeJSON(path.join(this.rootPath, 'package.json'), {
      name: 'root',
      private: true,
      devDependencies: {
        lerna: '^4.0.0'
      }
    })
  }
  async ensureLernaConfig() {
    console.info('创建lerna.json')
    await fs.writeJSON(path.join(this.rootPath, 'lerna.json'), {
      $schema: 'node_modules/lerna/schemas/lerna-schema.json',
      useWorkspaces: true,
      version: '0.0.0'
    })
  }
  async ensurePackagesDir() {
    console.info('创建package.json')
    await fs.mkdirp(path.join(this.rootPath, 'packages'))
  }
}

function factory(argv) {
  return new InitCommand(argv).execute()
}

module.exports = factory
