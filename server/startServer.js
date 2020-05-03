const { startServer } = require('./server.js')
const { buildEnvironment } = require('../config/buildEnvironment')

const env = buildEnvironment(process.env.ENV || 'development')

startServer(env.apiPort)
  .then(port => console.log(`API Server started at ${port}`))
  .catch(error => console.error(error))
