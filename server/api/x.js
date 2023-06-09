
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {users} from "../db/schema.js"
const db = drizzle(postgres(process.env.POSTGRES_URL, {ssl:'require'}))

export default defineEventHandler(async (event) => {
	const x = await db.select().from(users)
	return "Works"
})