<nav class="navigation">
	<ul>
		<li><a href="#hero">home</a></li>
		<li><a href="#about">about</a></li>
		<li><a href="#projects">projects</a></li>
	</ul>
</nav>

<style lang="scss">
	@import '$lib/styles/colors';

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2rem;
		padding: 0;

		li {
			list-style-type: none;

			a {
				color: $primary;
				text-decoration: none;
			}
		}
	}
</style>
