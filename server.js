const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults()

server.db = router.db

server.use(middlewares)
server.use(auth)
server.use(router)

const PORT = 5000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
  console.log('Available routes:')
  console.log(Object.keys(router.db.getState()))
})
