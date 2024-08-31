<footer>
	<h4>Links</h4>
	<ul><li><a href="/">> Email</a></li></ul>
	<ul><li><a href="/">> Github</a></li></ul>
</footer>

<style lang="scss">
	@import '$lib/styles/colors';

	footer {
		min-height: 12rem;
		background-color: $secondary;
		padding: 2rem;
		width: 100%;
		box-sizing: border-box;

		ul {
			list-style-type: None;

			a {
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
