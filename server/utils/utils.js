import { createPool } from "@vercel/postgres"; 
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from "../db/schema.js"

const client = createPool({maxUses:1, connectionString: process.env.POSTGRES_URL})
export const db = drizzle(client, {schema})
// let _db = null
// export const useDb = () => {
// 	if (!_db){
// 		const client = createClient({maxUses:1, connectionString: process.env.POSTGRES_URL_NON_POOLING})
// 		_db = drizzle(client, {schema})
// 	}
// 	return _db
// }