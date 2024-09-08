<script lang="ts">
	import { onMount } from "svelte";
	import Footer from "../Footer.svelte";

	import hljs from "highlight.js/lib/core";
	import rust from "highlight.js/lib/languages/rust";
	import "highlight.js/styles/github-dark.css";
	hljs.registerLanguage("rust", rust);
	let codeBlock: HTMLElement;

	onMount(() => {
		hljs.highlightElement(codeBlock);
	});
</script>

<svelte:head>
	<title>Repeater - Real-Time Communication with Rust</title>
	<meta
		name="description"
		content="Repeater is a Rust library designed for real-time applications. Features include WebSocket support, command-based architecture, and easy client management."
	/>
	<meta
		name="keywords"
		content="Repeater, Rust, real-time applications, WebSocket, Tokio, command-based architecture, client management, Rust library, real-time communication, open source"
	/>
	<meta name="author" content="Richard Marin" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		property="og:title"
		content="Repeater - Real-Time Communication with Rust"
	/>
	<meta
		property="og:description"
		content="Repeater is a versatile Rust library designed for building real-time applications."
	/>
	<meta property="og:url" content="https://rmarinn.github.io/repeater" />
</svelte:head>

<main>
	<header>
		<h1 class="repeater">REPEATER</h1>
		<nav>
			<a href="/" class="home-link">Home <span class="icon-home"></span></a>
		</nav>
	</header>

	<section>
		<p>
			Repeater is a versatile Rust library designed for building real-time
			applications. Whether you're creating a chat app, a collaborative tool, or
			any system that needs real-time communication, Repeater provides the
			building blocks to get started quickly.
		</p>
	</section>

	<section>
		<h2>Features</h2>
		<ul class="project-features">
			<li>
				<strong>WebSocket Communication</strong>: Efficiently handle multiple
				WebSocket connections.
			</li>
			<li>
				<strong>Command-Based Architecture</strong>: Extendable command system
				for processing various message types.
			</li>
			<li>
				<strong>Client Management</strong>: Simplified management of client
				connections and message routing.
			</li>
			<li>
				<strong>Modular Design</strong>: Easily customizable and scalable with
				its organized structure.
			</li>
			<li>
				<strong>Zero Deadlocks</strong>: Extensively uses message passing to
				avoid deadlocks.
			</li>
			<li>
				<strong>Tokio Runtime</strong>: High performance and scalability using
				Tokio’s async runtime.
			</li>
		</ul>
	</section>

	<section>
		<h2>Example Usage</h2>
		<pre><code bind:this={codeBlock} class="rust"
				>{`use repeater::start_server;
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    start_server(addr).await;
}
`}</code
			></pre>
	</section>

	<section>
		<h2>Development Status</h2>
		<p>Repeater is still in development.</p>
		<a
			href="https://github.com/rmarinn/repeater"
			target="_blank"
			rel="noopener"
			title="View the Repeater project on GitHub"
			class="github-link"
			>View project on GitHub <span class="icon-github"></span>
		</a>
	</section>
</main>

<Footer />

<style lang="scss">
	@import "$lib/styles/colors";

	h1 {
		font-size: 2rem;
	}

	h2,
	h3 {
		letter-spacing: 0.18rem;
	}

	h2 {
		margin-top: 1rem;
	}

	main {
		padding: 2rem;
		min-height: calc(100svh - 12rem);
		max-width: 48rem;
		margin: auto;

		display: flex;
		flex-direction: column;
		gap: 2rem;
		line-height: 1.8rem;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.github-link {
		width: 80%;
		color: $accent;
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 0.2rem;

		.icon-github {
			display: inline-block;
			width: 1.5rem;
			height: 1.5rem;
			background-color: currentColor;
			--svg: url("$lib/imgs/mdi-github.svg");
			mask-image: var(--svg);
			mask-repeat: no-repeat;
			mask-size: 100% 100%;
			-webkit-mask-image: var(--svg);
			-webkit-mask-repeat: no-repeat;
			-webkit-mask-size: 100% 100%;
		}
	}

	header {
		display: flex;
		h1 {
			flex-grow: 1;
		}
	}

	.home-link {
		color: $accent;
		display: flex;
		align-items: center;
		gap: 0.2rem;

		.icon-home {
			display: inline-block;
			width: 1.5rem;
			height: 1.5rem;
			background-color: currentColor;
			--svg: url("$lib/imgs/mdi-home.svg");
			mask-image: var(--svg);
			mask-repeat: no-repeat;
			mask-size: 100% 100%;
			-webkit-mask-image: var(--svg);
			-webkit-mask-repeat: no-repeat;
			-webkit-mask-size: 100% 100%;
		}
	}

	code {
		line-height: 1rem;
	}
</style>
