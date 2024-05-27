<script lang="ts">
    import { userName } from '../../stores';

    console.log('userName', $userName)
</script>


{#if $userName.length === 0}
    <p>Sorry you must create or join a room</p>
    <a href="/">Go to main</a>
{:else}
    <h2>Welcome to the room </h2>
{/if}
