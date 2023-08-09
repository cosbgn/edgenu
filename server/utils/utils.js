import { authOptions } from "../api/auth/[...].js"
import { getServerSession } from '#auth'

export async function get_user(event){
	const user = await getServerSession(event, authOptions)
	if (!user || !user?.id){
		throw createError({ statusCode:401, statusMessage:"You need to be logged in to do this" })
	}
	// Disable Caching for logged in users
	appendResponseHeader(event, 'Cache-Control', 'no-cache')
	return user
}