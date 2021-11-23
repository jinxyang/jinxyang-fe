const path = require('path')

const execa = require('execa')

const cwd = process.cwd()
const srcPath = path.join(cwd, 'src')
const distPath = path.join(cwd, 'es')
const extensions = ['.js', '.jsx']

const babelConfigFilePath = path.resolve(__dirname, '../babel.config')

const babelArgs = [
  srcPath,
  '--config-file',
  babelConfigFilePath,
  '--out-dir',
  distPath,
  '--extensions',
  extensions.join(','),
].join(' ')

const command = ['babel', babelArgs].join(' ')

;(async () => {
  process.env.BABEL_ENV = 'modern'
  try {
    await execa.command(command)
  } catch (e) {
    console.log(e)
  }
})()
