<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	<div class="card">
		<h2>{$page.status}</h2>
		<p>{$page.error?.message}</p>
		<a href="/">Go back to the homepage</a>
	</div>
</main>

<style lang="scss">
	@import '$lib/styles/breakpoints';
	@import '$lib/styles/colors';

	main {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh; /* for browsers that don't support svh */
		height: 100svh;

		.card {
			color: $text;
			border: solid 2px $primary;
			margin: 0 auto;
			padding: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			> h2 {
				font-size: 2.5rem;
			}

			> a {
				color: $accent;
			}
		}
	}
</style>
