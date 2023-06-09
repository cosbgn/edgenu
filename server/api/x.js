

import {users} from "../db/schema.js"

import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'
const db = drizzle(sql)

export default defineEventHandler(async (event) => {
	return await db.select().from(users)
})