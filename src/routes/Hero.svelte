<div class="container">
	<div class="left">
		<p>Hi! i'm</p>
		<span class="name">RICHARD<br />MARIN</span>
		<p>I build applications for<br /> desktop and the web.</p>
	</div>
	<div class="right">
		<p>Have a concept?</p>
		<a href="mailto:richard.marin529@protonmail.com?subject=Hello%20there!">Let's make it happen</a>
	</div>
</div>

<style lang="scss">
	@import '$lib/styles/fonts';
	@import '$lib/styles/colors';

	.container {
		display: flex;
		justify-content: center;
		width: 50%;
		margin: auto;
		gap: 8rem;

		.left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			text-align: left;
			height: 100%;
			gap: 0.05rem;

			.name {
				color: $accent;
				font-size: 6.5rem;
				letter-spacing: 0.25rem;
				line-height: 5rem;
				margin: 0;
				font-weight: 800;
				font-family: $font-jumbo;
			}

			p {
				font-size: 2rem;
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
			font-size: 1.5rem;

			a {
				color: $text;
				font-size: 2rem;
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
			}
		}
	}
</style>
