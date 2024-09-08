<script lang="ts">
	import Hero from "./Hero.svelte";
	import Projects from "./Projects.svelte";
	import Footer from "./Footer.svelte";
	import About from "./About.svelte";
</script>

<head>
	<title>Richard Marin - Developer Portfolio</title>
	<meta
		name="description"
		content="Hi, I'm Richard Marin, a developer building desktop and web applications. Explore my projects like Lockkey and Repeater. Let's make your concept a reality."
	/>
	<meta
		name="keywords"
		content="Richard Marin, developer portfolio, Rust, Svelte, web applications, desktop applications, Lockkey, Repeater"
	/>
	<meta name="author" content="Richard Marin" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Richard Marin - Developer Portfolio" />
	<meta
		property="og:description"
		content="I'm Richard Marin, a developer specializing in desktop and web applications. Check out my projects Lockkey and Repeater."
	/>
	<meta property="og:url" content="https://rmarinn.github.io/" />
	<meta name="twitter:card" content="summary_large_image" />
</head>

<main class="sections">
	<section id="hero">
		<Hero />
	</section>

	<section id="projects">
		<Projects />
	</section>

	<section id="about">
		<About />
	</section>
</main>

<Footer />

<style lang="scss">
	@import "$lib/styles/colors";

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
		width: 70%;
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
