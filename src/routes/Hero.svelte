<div class="container">
	<div class="left">
		<p>Hi! i'm</p>
		<span class="name">RICHARD<br />MARIN</span>
		<p>I build applications for<br /> desktop and the web.</p>
	</div>
	<div class="right">
		<p>Have a concept?</p>
		<a
			href="mailto:richard.marin529@protonmail.com?subject=Hello%20there!"
			title="Send an email">Let's make it happen</a
		>
	</div>
</div>

<style lang="scss">
	@import "$lib/styles/fonts";
	@import "$lib/styles/colors";
	@import "$lib/styles/breakpoints";

	.container {
		display: flex;
		justify-content: center;
		gap: 8rem;
		width: 50%;
		margin: auto;

		@media (max-width: $media-md) {
			justify-content: space-between;
			width: 80%;
			gap: 2rem;
		}

		.left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			text-align: left;
			height: 100%;
			gap: 0.05rem;

			@media (max-width: $media-sm) {
				text-align: center;
				align-items: center;
			}

			.name {
				color: $accent;
				font-size: 6.5rem;
				letter-spacing: 0.25rem;
				line-height: 5rem;
				margin: 0;
				font-weight: 800;
				font-family: $font-jumbo;

				@media (max-width: $media-md) {
					font-size: 4.5rem;
					line-height: 3.8rem;
				}
			}

			p {
				font-size: 2rem;

				@media (max-width: $media-md) {
					font-size: 1rem;
				}
			}
		}

		.right {
			font-family: $font-primary;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-wrap: nowrap;
			padding: 2rem;
			gap: 1.5rem;
			text-align: center;
			font-size: 2rem;

			@media (max-width: $media-md) {
				font-size: 1.25rem;
			}

			a {
				color: $background;
				font-size: 1.5rem;
				margin: 0 auto;
				padding: 1rem;
				background-color: $accent;
				border-radius: 0.25rem;
				cursor: pointer;
				text-decoration: none;
				transition:
					transform 0.2s ease-out,
					box-shadow 0.2s ease-out;

				&:hover {
					transform: translateY(-0.25rem);
					box-shadow: 0 0.25rem 8rem 0 rgba($accent, 0.5);
				}

				@media (max-width: $media-md) {
					padding: 0.5rem;
					font-size: 1rem;
				}
			}
		}

		@media (max-width: $media-sm) {
			flex-direction: column;
		}
	}
</style>
