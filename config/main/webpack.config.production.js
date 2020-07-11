// Copyright (c) 2020 Gonzalo Müller Bravo.
const path = require('path')

const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.config.common')

module.exports = merge(common.config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../../build/pro/www')
  },
  optimization: {
    minimizer: [ new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      }
    }) ],
  },
  plugins: [
    common.assets([ {
      from: './node_modules/bulma/css/bulma.min.css', to: 'bulma.css'
    } ]),
    common.html({
      templateParameters: {
        development: false
      }
    }),
    common.constants('production')
  ],
})
