<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
</script>

<footer>
	<div class="left">
		<label for="links" class="links-lbl">Stay in touch</label>
		<ul id="links">
			<li>
				<a
					href="mailto:richard.marin529@protonmail.com?subject=Hi%20there!"
					title="Send an email"
				>
					<Icon icon="mdi:email" width="1.5rem" height="1.5rem" /> Email</a
				>
			</li>
			<li>
				<a
					href="https://github.com/rmarinn"
					target="_blank"
					rel="noopener"
					title="View my GitHub profile"
					><Icon icon="mdi:github" width="1.5rem" height="1.5rem" /> GitHub
				</a>
			</li>
		</ul>
	</div>
	<div class="right">
		{#if $page.url.pathname === "/"}
			<a href="#hero" class="link-with-icon"
				>Back to Top <Icon
					icon="mdi:arrow-up"
					width="1.5rem"
					height="1.5rem"
				/></a
			>
		{/if}
		<p><i>Made with Svelte, lots of scss, and love.</i></p>
	</div>
</footer>

<style lang="scss">
	@import "$lib/styles/colors";
	@import "$lib/styles/fonts";
	@import "$lib/styles/breakpoints";

	footer {
		min-height: 12rem;
		background-color: $secondary;
		padding: 2rem;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left {
			width: 20%;

			label.links-lbl {
				font-size: 1.5rem;
				display: block;
				margin-bottom: 1rem;
				font-family: $font-primary;
			}

			ul {
				list-style-type: None;
				display: flex;
				gap: 0.5rem;
				padding: 0;

				@media (max-width: $media-sm) {
					flex-direction: column;
				}

				a {
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					color: $text;
					text-decoration: none;
					transition: color 0.1s ease-out;
					margin-right: auto;

					&:hover {
						color: $accent;
					}
				}
			}
		}

		.right {
			width: 25%;
			text-align: end;
			display: flex;
			flex-direction: column;
			align-items: end;
			gap: 1rem;
		}
	}

	.link-with-icon {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
