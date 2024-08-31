<script lang="ts">
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import Footer from './Footer.svelte';
</script>

<main class="sections">
	<section id="hero">
		<Hero />
	</section>

	<section id="projects">
		<Projects />
	</section>

	<section id="about">
		<div>
			<h2>About me</h2>
			<p>This is the about section...</p>
		</div>
	</section>
</main>

<Footer />

<style lang="scss">
	@import '$lib/styles/colors';

	.sections {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}

	section {
		box-sizing: border-box;
		width: 100%;
	}

	#hero {
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#projects {
		min-height: 60vh;
	}

	#about {
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;

		div {
			text-align: center;
			border: solid 2px $primary;
			padding: 2rem;
		}
	}
</style>
