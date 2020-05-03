// Copyright (c) 2020 Gonzalo Müller Bravo.
const common = require('./webpack.config.common')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common.config, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../../build/dev/www')
  },
  plugins: [
    common.assets([
      {
        from: './node_modules/bulma/css/bulma.css'
      }, {
        from: './node_modules/bulma/css/bulma.css.map'
      }
    ]),
    common.html({
      templateParameters: {
        development: true
      }
    }),
    common.constants('development')
  ],
  devtool: 'inline-source-map'
})
