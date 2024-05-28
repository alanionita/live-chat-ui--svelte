<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import stores from '../../stores';
	const { wsConnString, userName } = stores;

	const stateWsReady = writable(false);

	let ws: any;

	function wsConnect(wsUrl: string) {
		ws = new WebSocket(wsUrl);

		ws.addEventListener('open', (event: any) => {
			ws.send('Hello from WS!');
		});

		ws.onmessage = (event: any) => {
			console.info('ws.message', event.data);
            console.info('ws.readyState', ws.readyState)
			if (ws.readyState === 1) {
				stateWsReady.set(true);
			}
		};
	}

	onMount(() => {
		wsConnect($wsConnString);
	});
</script>

<h2>Welcome to the room</h2>

{#if $stateWsReady}
	<p>Connected</p>
{:else}
	<p>Not Connected</p>
{/if}
