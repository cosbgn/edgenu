export default defineEventHandler(async (event) => {
	throw createError({statusCode:403, statusMessage:`This error shows up in localhost but not when deployed.`})
})