import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

const clientConfig: ConstructorParameters<typeof PrismaClient>[0] = {
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
}

export const prisma = new PrismaClient(clientConfig)