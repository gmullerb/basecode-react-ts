const { createServer } = require('http')

let server

function startServer(port) {
  return new Promise((resolve, reject) => {
    try {
      server = createServer(function(request, response) {
        let data = ''
        request.on('data', chunk => {
          data += chunk
        }).on('end', () => {
          response.setHeader('Access-Control-Allow-Origin', '*');
          response.setHeader('Content-Type', 'text/plain');
          response.end(Array.from(data)
            .reverse()
            .join('')
          )
        })
      }).listen(port, () => {
        resolve(server.address().port)
      })
    }
    catch (error) {
      reject(error)
    }
  })
}

function stopServer() {
  server.close()
}

module.exports = {
  startServer,
  stopServer
}