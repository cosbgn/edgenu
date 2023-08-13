import CredentialsProvider from "@auth/core/providers/credentials"
import GoogleProvider from "@auth/core/providers/google"

import { NuxtAuthHandler } from "#auth"
const secret = "Ni2ozVOKix6jnI1yRS0whDR+COzyTurZZFr7s/YZrjY="

export const authOptions = {
	pages: {
		signIn: '/login',
		// signOut: '/',
	},
	secret: secret,
	providers: [
		
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			profile: (profile) => ({given_name: profile.given_name, family_name:profile.family_name, picture:profile.picture, email: profile.email, email_verified:profile.email_verified, id:profile.sub}),
		}),

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
	callbacks: {
		async signIn({ profile }) {
			return true
		},

		async jwt({token, user}){
			if (user?.email) {
				token.user = user ///{id:'6172882', email:'email@me.com'}
			}
			return token
		},
		
		async session({ token, session }) {
			return token.user ?? {}
		}
	}
}

const config = {
	authJs: {
		secret: secret // You can generate one with `openssl rand -base64 32`
	},
	public: {
		authJs: {
			guestRedirectTo: "/",
			baseUrl: 'https://edgenu.vercel.app', // The base URL is used for the Origin Check in prod only
			verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
		}
	} 
}

export default NuxtAuthHandler(authOptions, config)
