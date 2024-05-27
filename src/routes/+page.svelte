<script lang="ts">
	import FormConnStr from '../components/atoms/FormConnStr.svelte';
	import Main from '../components/template/Main.svelte';
	import { wsConnString } from '../stores';
    
	function handleSubmit(event: Event) {
		const target = event.target as HTMLFormElement;

		if (!target) throw Error('Target must be present');
		if (target) {
			const formData = new FormData(target);

			const data: Record<string, any> = {};
			for (let field of formData) {
				const [key, value] = field;
				data[key] = value;
			}
			const { connectionStr } = data;

			if (connectionStr.length > 0) {
				wsConnString.set(connectionStr);
			}
		}
	}
</script>

<h1>Mini Live Chat UI</h1>

{#if $wsConnString.length === 0}
	<FormConnStr on:submit={handleSubmit}></FormConnStr>
{:else}
	<Main/>
{/if}
