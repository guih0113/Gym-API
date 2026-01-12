import { app } from '../src/app'
import { env } from '../src/env'

export default app

app.listen({
  host: '0.0.0.0',
  port: env.PORT,
}).then(() => {
  console.log('🚀 HTTP Server Running!')
})
