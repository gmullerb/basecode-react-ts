// Copyright (c) 2020 Gonzalo Müller Bravo.
const BundleRestrictPlugin = require('bundle-restrict-webpack-plugin').default
const { buildEnvironment } = require('../buildEnvironment')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { interpolateName } = require('loader-utils')
const webpack = require('webpack')

const cssRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        import: false,
        modules: {
          localIdentName: '[hash:base32:5]',
          getLocalIdent: (loaderContext, localIdentName, localName, options) =>
            localName.substring(0, 3) + interpolateName(loaderContext, localIdentName, {
              content: localName,
              ...options
            })
        }
      }
    },
    'postcss-loader'
  ]
}

const urlRule = {
  test: /\.(gif|png|jpg|svg)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: false,
        name: '[name].[ext]',
        publicPath: './'
      },
    },
  ],
}

const reactRule = {
  test: /\.ts(x?)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: 'usage'
            }
          ],
          '@babel/preset-react',
          '@babel/preset-typescript'
        ]
      }
    },
    {
      loader: 'ts-loader'
    }
  ]
}

const constants = environment => new webpack.DefinePlugin({
  ENV: JSON.stringify(buildEnvironment(environment, true))
})

module.exports = {
  config: {
    entry: {
      main: './src/main/mainEntryPoint.tsx',
      vendor: [
        'core-js',
        'react',
        'raf',
        'react-dom',
        'react-reducer-provider',
        'react-router',
        'react-router-dom',
        'regenerator-runtime',
        'whatwg-fetch'
      ]
    },
    output: {
      filename: '[name].js'
    },
    module: {
      noParse: /.*\.test\.*$/,
      rules: [
        reactRule,
        urlRule,
        cssRule
      ]
    },
    resolve: {
      extensions: [ '.ts', '.tsx', '.js' ],
      modules: [
        'node_modules'
      ]
    },
    plugins: [
      new BundleRestrictPlugin({
        chunk: 'main.js',
        modules: [ 'enzyme' ]
      })
    ],
    watch: false
  },
  assets: (config) => new CopyPlugin([
    { from: './src/main/variable.css' },
    { from: './src/main/assets' },
    ...config
  ]),
  html: (config) => new HtmlWebpackPlugin({
    template: './src/main/index.ejs',
    ...config
  }),
  constants
}
