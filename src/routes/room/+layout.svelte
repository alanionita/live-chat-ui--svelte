<script>

	import ConnectionStatus from "../../components/molecule/ConnectionStatus.svelte";

</script>
<nav class="nav">
	<a href="/">back</a>
	<ConnectionStatus/>
</nav>

<slot />

<style>
	.nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>