// Copyright (c) 2020 Gonzalo Müller Bravo.
const path = require('path')
const { apply } = require('json-merge-patch')
const { inspect } = require('util')

module.exports.buildEnvironment = (environment, log = false) => {
  const commonEnv = require(path.join(__dirname, '../src/environments/common.json'))
  const constants = apply(apply(commonEnv, require(path.join(__dirname, `../src/environments/${environment}.json`))), {
    BUILD_VERSION: process.env.npm_package_version
  })
  if (log) {
    console.info('App Constants:')
    console.info('==============')
    console.info(inspect(constants, { depth: 3 }))
    console.info('==============')
  }
  return constants
}
