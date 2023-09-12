<template>
	<button @click="sendForm">Send Form</button>
</template>

<script setup>
	const sendForm = async () => {
		const form = new FormData()
		form.append('foo', 'bar')
		await $fetch("/api/form-test", {method:"POST", body:form})
	}
</script>