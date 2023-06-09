import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from '@vercel/postgres'

let _db = null

export const useDb = () => {
	if (!_db){
		const pool = createPool({
			maxUses:1, // For Edge Functions: https://github.com/vercel/storage/tree/main/packages/postgres
			connectionString:process.env.POSTGRES_URL
		})
		_db = drizzle(pool, { schema })
	}
	return _db
}