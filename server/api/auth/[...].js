import GoogleProvider from "@auth/core/providers/google"
import { NuxtAuthHandler } from "#auth"


export const authOptions = {
	secret: process.env.AUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			profile: (profile) => ({given_name: profile.given_name, family_name:profile.family_name, picture:profile.picture, email: profile.email, email_verified:profile.email_verified, id:profile.sub}),
		})
	  ]
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
