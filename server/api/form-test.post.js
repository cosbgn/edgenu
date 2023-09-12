export default defineEventHandler(async (event) => {
	console.log("works")
	const form = await readFormData(event)
	console.log("doesn't work")
	return "DONE"
})