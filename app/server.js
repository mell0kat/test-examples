import express from 'express'
import path from 'path'
import 'http'
import bodyParser from 'body-parser'

const app = express()
const index = path.join(__dirname, '../index.html')

app.use(express.static('dist'))
app.use(bodyParser.json())

app.get('/*', (req, res) => {
  res.sendFile(index)
})

app.put('/api/v1/', (req, res) => {
  console.log('hitting the route with: ', req.body)
  res.status(201).send(req.body)
})

app.listen(3000, () => console.log('server listening closely on port 3000'))

export default app
