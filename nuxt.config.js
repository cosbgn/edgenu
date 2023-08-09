import { resolve } from "node:path"
export default defineNuxtConfig({
	nitro: {
		preset: 'vercel-edge'
	},
	alias: {
		cookie: resolve(__dirname, "node_modules/cookie")
	},
	modules:['@hebilicious/authjs-nuxt']
})
