<script lang="ts">
	import { base } from "$app/paths";
</script>

<div class="outer-container">
	<h2>My Projects</h2>
	<div class="inner-container">
		<a href="{base}/lockkey" class="card">
			<h3 class="lockkey">Lockkey</h3>
		</a>
		<a href="{base}/repeater" class="card">
			<h3 class="repeater">REPEATER</h3>
		</a>
	</div>
</div>

<style lang="scss">
	@import "$lib/styles/colors";
	@import "$lib/styles/fonts";
	@import "$lib/styles/breakpoints";

	.outer-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		.inner-container {
			display: flex;
			flex-direction: row;
			justify-items: center;
			gap: 2rem;

			@media (max-width: $media-md) {
				width: 100%;
				flex-direction: column;
				align-items: center;
			}

			.card {
				border: solid 2px $primary;
				padding: 1rem;
				width: 30svw;
				height: 30svw;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				transition: background-color 0.3s ease-in-out;
				text-decoration: none;
				color: $text;

				@media (max-width: $media-sm) {
					width: 70svw;
					height: 70svw;
				}

				> h3 {
					font-size: 2.5rem;

					@media (max-width: $media-sm) {
						font-size: 2rem;
					}
				}

				&:hover {
					background-color: $secondary;
				}
			}
		}
	}
</style>
