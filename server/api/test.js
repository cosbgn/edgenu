export default defineEventHandler(async (event) => {
	return {server_user:get_user(event)} // From Utils
})