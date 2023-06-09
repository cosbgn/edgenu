import {users} from "../db/schema.js"
export default defineEventHandler(async (event) => {
	const db = await useDb()
	await db.insert(users).values({ email: 'supx@me.com'});
	const x = await db.select().from(users)
	return {
		msg:"Hello from the edge",
		x
	}
})