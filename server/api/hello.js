import {users} from "../db/schema.js"
export default defineEventHandler(async (event) => {
	// const dx = await useDb()
	await useDb().insert(users).values({ email: 'supx@me.com'});
	const x = await useDb().select().from(users)
	return {
		msg:"Hello from the edge",
		x
	}
})