import server from './server.js'
import request from 'supertest'

describe('server', () => {
  test('it serves the main app from GET /', () => {
    return request(server)
      .get('/')
      .expect('content-type', 'text/html; charset=UTF-8')
      .expect(200)
  })

  test('it serves the static bundle from /bundle.js', () => {
    return request(server)
      .get('/bundle.js')
      .expect('content-type', 'application/javascript')
      .expect(200)
  })

  test('it responds with a 201 to put requests to the API', ()=> {
    const data = { username: 'Morty', password: 'The Mortiest'}
    return request(server)
      .put('/api/v1')
      .send(data)
      .expect(201)
  })
})
