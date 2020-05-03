// Copyright (c) 2020 Gonzalo Müller Bravo.
const { buildEnvironment } = require('../buildEnvironment')
const fileSystem = require('fs')
const jasmineReporters = require('jasmine-reporters')
const path = require('path')
const { Reporter } = require('jasmine-pretty-html-reporter')
const { SpecReporter } = require('jasmine-spec-reporter')
const { startServer } = require('../../server/server')
const webpack = require('webpack')

const addJasmineReporters = (e2eReportFolder) => {
  const jasmineEnv = jasmine.getEnv()
  jasmineEnv.addReporter(new SpecReporter({
    spec: {
      displayStacktrace: 'pretty'
    }
  }))
  jasmineEnv.addReporter(new Reporter({
    path: e2eReportFolder
  }))
  jasmineEnv.addReporter(new jasmineReporters.JUnitXmlReporter({
    savePath: e2eReportFolder
  }))
}

const environment = process.env.ENV || 'development'

module.exports.config = {
  allScriptsTimeout: 60000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ '--no-sandbox', '--disable-web-security', '--disable-dev-shm-usage' ]
    }
  },
  directConnect: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  beforeLaunch: async function () {
    return new Promise((resolve, reject) => webpack(require(`../main/webpack.config.${environment}`))
      .run((err, stats) => !!err || stats.hasErrors() ? reject() : resolve())
    )
  },
  onPrepare: async function () {
    const e2eReportFolder = path.join(__dirname, '../../build/reports/e2e')
    fileSystem.mkdirSync(e2eReportFolder, {
      recursive: true
    })
    browser.ignoreSynchronization = true
    require('@babel/register')({
      extensions: [ '.js' ],
      presets: [ '@babel/preset-env' ]
    })
    require('@babel/polyfill')
    addJasmineReporters(e2eReportFolder)
    browser.baseUrl = `file://${path.join(__dirname, '../../build/dev/www/index.html')}`
    return startServer(buildEnvironment(environment).apiPort)
      .then(port => console.info(`API Server started at ${port}`))
  },
  specs: [
    '../../e2e/**/*.e2e.js'
  ]
}
