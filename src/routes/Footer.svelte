<footer>
	<label for="links" class="links-lbl">Links</label>
	<ul id="links">
		<li><a href="/">> Email</a></li>
		<li><a href="/">> Github</a></li>
	</ul>
</footer>

<style lang="scss">
	@import "$lib/styles/colors";
	@import "$lib/styles/fonts";

	footer {
		min-height: 12rem;
		background-color: $secondary;
		padding: 2rem;
		width: 100%;
		box-sizing: border-box;

		label.links-lbl {
			font-size: 1.5rem;
			display: block;
			margin-bottom: 1rem;
			font-family: $font-primary;
		}

		ul {
			list-style-type: None;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			a {
				display: block;
				color: $text;
				text-decoration: none;
				transition: color 0.1s ease-out;

				&:hover {
					color: $accent;
				}
			}
		}
	}
</style>
