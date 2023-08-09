import CredentialsProvider from "@auth/core/providers/credentials"
import { NuxtAuthHandler } from "#auth"


export const authOptions = {
	pages: {
		signIn: '/login',
		signOut: '/',
	},
	secret: process.env.AUTH_SECRET,
	providers: [
		CredentialsProvider({
			credentials: {
				username: { label: "Username", type: "text", placeholder: "admin" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				return { id: "1", email: "admin@me.com"}
			}
		})
	],
}

const config = {
	authJs: {
		secret: process.env.AUTH_SECRET // You can generate one with `openssl rand -base64 32`
	},
	public: {
		authJs: {
			guestRedirectTo: "/",
			baseUrl: process.env.NEXTAUTH_URL, // The base URL is used for the Origin Check in prod only
			verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
		}
	} 
}

export default NuxtAuthHandler(authOptions, config)
