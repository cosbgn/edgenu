import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from "../db/schema.js"
let _db = null
export const useDb = () => {
	if (!_db){
		// Max 1 is needed on edge functions
		const client = new postgres(process.env.POSTGRES_URL, { 
			max: 1, 
			ssl:'require',
			connect_timeout: 10,
		});
		_db = drizzle(client, { schema })
	}
	return _db
}