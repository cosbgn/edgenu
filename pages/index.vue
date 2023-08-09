<template>
	<div style="padding:10px">

		<div>
			<p>Session is: {{ session }}</p>
			<p>status is: {{ status }}</p>
			<nuxt-link to="/private">Private</nuxt-link>
		</div>
		<div>
			<button @click="login">signIn creds</button>
			<button @click="signIn('google')">signIn ggle</button>
			<button @click="signOut()">signOut</button>
		</div>

	</div>
</template>
<script setup>
const { signIn, signOut, session, status, cookies, getProviders } = useAuth()
const login = async () => await signIn('credentials', { username: 'admin', password: 'admin'})
</script>