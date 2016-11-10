const { Readable } = require('stream')
const http = require('http')
const fs = require('fs')
const WebSocketServer = require('websocket').server
const websocket = require('websocket-stream')
const faker = require('faker')
const got = require('got')

// const server = http.createServer((req, res) => {
//   console.log(`request ${req.url} ${new Date()}`)
//   res.writeHead(404)
//   res.end()
// })

// const handle = stream => {
//   got.stream('http://unix:/var/run/docker.sock:/containers/fac8d2e487b6/logs?stderr=1&stdout=1&follow=1&tail=10')
//     .on('error', err => console.error(err))
//     .pipe(stream)
//     .on('error', err => console.error(err))
// }

const server = http.createServer()

const echo = stream => {
  const content = new Readable()
  content._read = () => {}
  content.push('luuuuuuuuuuuuuul')
  content.push(null)
  content.pipe(stream)
}

websocket.createServer({ server }, echo)

server.listen(8181, () => 'server is listening on 8181')

// server.listen(8181, () => {
//   console.log('Server is listening on :8181')
// })

// const wsServer = new WebSocketServer({
//   httpServer: server,
//   autoAcceptConnections: false
// })

// wsServer.on('request', req => {
//   const connection = req.accept('echo-protocol', req.origin)
//
//   console.log('Connection accepted')
//
//   connection.on('message', message => {
//     console.log(`Received message: ${message}`)
//   })
//
//   connection.on('close', () => {
//     console.log(`Peer ${connection.remoteAddress} disconnected`)
//   })

  // setInterval(() => {
  //   connection.send(JSON.stringify({
  //     id: faker.random.uuid(),
  //     text: faker.helpers.randomize(['lol', 'lil', 'lul', 'lel', 'lal']),
  //     date: faker.date.recent()
  //   }))
  // }, 1000)

  // const stream = new Readable()
  //
  // stream._read = () => {
  //   setTimeout(() => {
  //     stream.push(`${new Date()} Hey :)\n`)
  //   }, 1000)
  // }
// })
