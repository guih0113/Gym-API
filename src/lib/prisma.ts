import { env } from '@/env'
import { PrismaClient } from '../../generated/prisma'

const clientConfig: ConstructorParameters<typeof PrismaClient>[0] = {
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
}

export const prisma = new PrismaClient(clientConfig)