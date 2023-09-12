// import { resolve } from "node:path"
export default defineNuxtConfig({

	// authJs:{
	// 	guestRedirectTo: "/login",
	// 	authenticatedRedirectTo: "/app/chat",
	// 	baseUrl: "https://edgenu.vercel.app",
	// 	verifyClientOnEveryRequest: true
	// },
	nitro: {
		preset: 'vercel-edge'
	},
	// alias: {
	// 	cookie: resolve(__dirname, "node_modules/cookie")
	// },
	// modules:['@hebilicious/authjs-nuxt']
})
