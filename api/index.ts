import type { VercelRequest, VercelResponse } from '@vercel/node'
// @ts-ignore
import { app } from '../build/app'

export default async (req: VercelRequest, res: VercelResponse) => {
  await app.ready()
  app.server.emit('request', req, res)
}
