import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres'
import * as schema from "../db/schema.js"

let _db = null

export const useDb = () => {
	if (!_db){
		_db = drizzle(sql, { schema })
	}
	return _db
}