export default defineEventHandler(async (event) => {
	// console.log("works")
	// const form = await readFormData(event)
	// console.log(form)
	const raw = await readBody(event)
	console.log(raw)
	// console.log("doesn't work")
	return "DONE"
})