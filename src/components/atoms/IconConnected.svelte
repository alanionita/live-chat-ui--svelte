<script lang="ts">
	export let connected: boolean;
</script>

<figure class="icon">
	<svg class="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		<circle fill="{connected ? "green" : "gray" }" cx="50" cy="50" r="50" />
	</svg>
</figure>

<style>
	.icon {
		width: 1rem;
		height: 1rem;
		margin: 0;
	}
</style>
