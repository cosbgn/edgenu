import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from '@vercel/postgres'
import * as schema from "../db/schema.js"
let _db = null

export const useDb = () => {
	if (!_db){
		const pool = createPool({ // https://github.com/vercel/storage/tree/main/packages/postgres
			maxUses:1, // For Edge Functions
			connectionString: process.dev ? 'http://localhost:5432' : process.env.POSTGRES_URL_NON_POOLING,
		})
		_db = drizzle(pool.sql, { schema })
	}
	return _db
}