
import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";
import pkg from 'pg';
const { Pool } = pkg;

import {users} from "../db/schema.js"

const pool = new Pool({
	connectionString: process.env.POSTGRES_URL,
	ssl: { rejectUnauthorized: false}
})
const db = drizzle(pool)

export default defineEventHandler(async (event) => {
	const x = await db.select().from(users)
	return x
})