import { migrate } from "drizzle-orm/vercel-postgres/migrator"

export default defineEventHandler(async (event) => {
	if (process.dev){
		const db = await useDb()
		await migrate(db, { migrationsFolder: "./server/db/migrations" })
		return "Done with migrations"
	}
})