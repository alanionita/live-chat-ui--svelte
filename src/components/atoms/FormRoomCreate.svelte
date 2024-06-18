<script lang="ts">
	import { userName } from '../../stores';
	export let ws: any;

	function validate() {
		console.log("I'm the validate() function");
		return;
	}

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
			const { name } = data;

			if (name.length > 0) {
				userName.set(name);
				window.location.replace('/room');
				ws.send(
					JSON.stringify({
						action: 'createRoom',
						name
					})
				);
			}
		}
	}
</script>

<form on:submit={handleSubmit}>
	<label for="name">
		<p>Please enter your name</p>
	</label>
	<input
		type="text"
		name="name"
		id="name"
		placeholder="Please enter your name"
		on:input={validate}
	/>
	<button type="submit"> Create room </button>
</form>
