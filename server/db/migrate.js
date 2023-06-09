// Simple script which applies migrations to the database
import 'dotenv/config'
import { migrate } from "drizzle-orm/vercel-postgres/migrator"
import { useDb } from '../utils/utils.js';
const db = await useDb()
const config = { migrationsFolder: "./server/db/migrations" }
try{
	await migrate(db, config)
	console.log("Migrations Ok")
} catch(e){
	console.log(e.message ?? e)
	throw(e?.message ?? e)
}