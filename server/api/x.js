
import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless'

import {users} from "../db/schema.js"

// const pool = new Pool({
// 	connectionString: process.env.POSTGRES_URL,
// 	ssl: { rejectUnauthorized: false}
// })
const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
const db = drizzle(pool)

export default defineEventHandler(async (event) => {
	return await db.select().from(users)
})