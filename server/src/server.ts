import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()
const port = 8080

app.register(cors)
app.register(appRoutes)

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
  })
