<script lang="ts">
	import FormConnStr from '../components/atoms/FormConnStr.svelte';

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
			console.log('Submit data ::', data);
		}
	}
</script>

<h1>Mini Live Chat UI</h1>

<FormConnStr on:submit={handleSubmit}></FormConnStr>
