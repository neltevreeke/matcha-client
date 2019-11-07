const webpack = require('webpack')
const fs = require('fs-extra')
const path = require('path')
const log = require('./log')
const paths = require('./paths')
const _ = require('lodash')
const pkg = require('../../package.json')

const getDeps = (pkgDependencies) => {
  const deps = {}

  for (const [name, version] of Object.entries(pkgDependencies)) {
    if (!pkg.dll.exclude.includes(name)) {
      deps[name] = version
    }
  }

  return deps
}

const deps = getDeps(pkg.dependencies)

function createDlls (callback, force = false) {
  const webpackConfig = require('../webpack/webpackConfigDll')
  const compiler = webpack(webpackConfig)

  if (!force && fs.pathExistsSync(paths.dllDependenciesPath)) {
    const lastDeps = fs.readJsonSync(paths.dllDependenciesPath)

    if (_.isEqual(deps, lastDeps)) {
      log.info('No new dependencies found. Skipping DLL build.')
      return callback && callback()
    }
  }

  log.info('Creating dlls...')

  compiler.run(error => {
    if (error) {
      return log.error(error)
    }

    log.info('Dlls created.')

    fs.writeJsonSync(path.resolve(paths.dllDependenciesPath), deps)
    return callback && callback()
  })
}

module.exports = {
  createDlls,
  deps
}
