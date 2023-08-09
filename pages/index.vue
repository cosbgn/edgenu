<template>
	<div style="padding:10px">

		<div>
			Hello, status is: {{ status }}
		</div>
		<div>
			<button @click="signIn">signIn</button>
			<button @click="signOut">signOut</button>
		</div>

	</div>
</template>
<script setup>
const {status, signIn, signOut } = useAuth()
</script>