<script lang="ts">
	import { onMount } from 'svelte';
	import stores from '../../stores';
	import IconConnected from '../../components/atoms/IconConnected.svelte';

	const { wsConnString, wsReady } = stores;

	let ws: any;

	function wsConnect(wsUrl: string) {
		ws = new WebSocket(wsUrl);

		ws.addEventListener('open', (event: any) => {
			ws.send('Hello from WS!');
		});

		ws.onmessage = (event: any) => {
			console.info('ws.message', event.data);
			console.info('ws.readyState', ws.readyState);
			if (ws.readyState === 1) {
				wsReady.set(true);
			}
		};
	}

	onMount(() => {
		wsConnect($wsConnString);
	});
</script>

<section class="conn-status">
    <IconConnected connected={$wsReady}/>
	{#if $wsReady}
		<p>Connected</p>
	{:else}
		<p>Loading...</p>
	{/if}
</section>

<style>
    .conn-status {
        display: grid;
        grid-template-columns: 1rem 1fr;
        grid-template-rows: 1fr;
        grid-gap: 0.5rem;
        align-items: center;
    }
</style>