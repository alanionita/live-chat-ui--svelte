<script>
	function validate() {
		console.log("I'm the validate() function");
        return;
    }
</script>

<form on:submit>
	<label for="connectionStr">
		<p>Please add WebSocket connect string</p>
	</label>
	<input
		type="text"
		name="connectionStr"
		id="connectionStr"
		placeholder="Please enter a connection string"
        on:input={validate}
    />
	<button type="submit"> Connect </button>
</form>
