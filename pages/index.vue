

<template>

<div>
	<p>Error:</p>
	<div v-if="error" class="bg-rose-50 mt-3 text-sm text-rose-500 p-3 border border-rose-600 rounded">
		{{ error.statusMessage }}
	</div>
</div>

</template>

<script setup>
const { error } = await useLazyFetch("/api/error")
</script>