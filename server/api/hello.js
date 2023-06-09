import {users} from "../db/schema.js"
export default defineEventHandler(async (event) => {
	
	await useDb().insert(users).values({ email: 'Adrew@me.co' })

	const usersx = await useDb().query.users.findMany({	})

	return {
		msg:"Hello from the edge",
		...usersx
	}
})