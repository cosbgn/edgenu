import { authOptions } from "../api/auth/[...].js"
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
	return await getServerSession(event, authOptions)
	// return {server_user:get_user(event)} // From Utils
})