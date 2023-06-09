// Simple script which applies migrations to the database
import 'dotenv/config'
import { migrate } from "drizzle-orm/vercel-postgres/migrator"
import { useDb } from '../utils/utils.js';
const db = await useDb()
try{
	await migrate(db, { migrationsFolder: "./server/db/migrations" })
	console.log("Done with migrations")
} catch(e){
	console.log(e.message ?? e)
	throw(e?.message ?? e)
}