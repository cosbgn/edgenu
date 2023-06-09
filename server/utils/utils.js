import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws'
import { drizzle } from 'drizzle-orm/neon-serverless'

import * as schema from "../db/schema.js"
let _db = null
export const useDb = () => {
	console.log(`Env is: ${process.env.NODE_ENV}`)
	// https://github.com/neondatabase/serverless#run-on-node
	if (process.env.NODE_ENV === "development"){
		neonConfig.webSocketConstructor = ws
	}
	if (!_db){
		// Max 1 is needed on edge functions neonConfig.webSocketConstructor = ws; 
		const pool = new Pool({ connectionString: process.env.POSTGRES_URL })
		_db = drizzle(pool, { schema })
	}
	return _db
}