// Copyright (c) 2020 Gonzalo Müller Bravo.
const path = require('path')

const merge = require('webpack-merge')

const common = require('./webpack.config.common')

module.exports = merge(common.config, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../../build/dev/www')
  },
  plugins: [
    common.assets([
      {
        from: './node_modules/bulma/css/bulma.css', to: 'bulma.css'
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
