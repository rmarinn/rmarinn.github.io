<script lang="ts">
	import Footer from "../Footer.svelte";
	import lockkey_img from "$lib/imgs/lockkey_login.webp";
</script>

<main>
	<header>
		<h1 class="lockkey">Lockkey</h1>
		<nav>
			<a href="/" class="home-link"
				>Home <span class="icon-home"></span></a
			>
		</nav>
	</header>

	<section>
		<p>
			Lockkey is a simple and secure secrets manager designed for storing
			passwords and text with ease.
		</p>
		<div class="project-media">
			<img src={lockkey_img} alt="Login page of Lockkey" />
			<a
				href="https://github.com/rmarinn/lockkey"
				target="_blank"
				rel="noopener"
				title="View the Lockkey project on GitHub"
				class="github-link"
				>View project on GitHub <span class="icon-github"></span>
			</a>
		</div>
	</section>

	<section>
		<h2>About Lockkey</h2>
		<p>
			Lockkey is a lightweight <em>secrets</em> manager focused on
			<strong>security</strong>
			and <strong>portability</strong>. It securely stores passwords and
			plain text by deriving an encryption key from your master password
			using
			<a
				href="https://en.wikipedia.org/wiki/Argon2"
				title="Learn more about Argon2"><strong>Argon2</strong></a
			>
			and encrypting data with
			<a
				href="https://en.wikipedia.org/wiki/Galois/Counter_Mode"
				title="Learn more about AES-GCM"><strong>AES-GCM</strong></a
			>
			before saving it to disk.
		</p>
		<ul class="project-features">
			<li>
				<strong>Tech Stack:</strong> Rust, Svelte, TypeScript, SCSS, Tailwind,
				SQLite
			</li>
			<li>
				<strong>Key Features:</strong>
				<ul>
					<li>
						<b>Secure storage:</b> Lockkey securely stores your passwords
						or text on disk using robust encryption.
					</li>
					<li>
						<b>Random password generator:</b> Easily create strong, random
						passwords with the built-in generator.
					</li>
					<li>
						<b>Clipboard functionality:</b> View your stored passwords
						or copy them to your clipboard at any time.
					</li>
					<li>
						<b>Offline access & portability:</b> Simply copy your `.secrets`
						file and use it across devices.
					</li>
					<li>
						<b>Automatic logout:</b> Lockkey automatically signs you
						out after a period of inactivity, ensuring your data remains
						secure.
					</li>
				</ul>
			</li>
			<li><strong>Status:</strong> Pre-release</li>
		</ul>
	</section>

	<section>
		<h2>Development Process</h2>
		<p>
			Lockkey started as a project to learn <em>Rust</em>, but soon
			evolved into an opportunity to dive deeper into <em>Svelte</em>.
			Despite the simplicity of the backend, Rust’s ergonomics and easy
			unit testing sped up development. Here’s a breakdown of how I built
			it.
		</p>

		<h3>The Backend</h3>
		<p>
			Lockkey’s backend is a simple SQLite database. The primary challenge
			was determining the encryption methods and how to keep the master
			password secure. To address this, Lockkey uses <strong
				>AES-GCM</strong
			>
			for encryption and derives an encryption key from the user’s master password
			with <strong>Argon2</strong>, ensuring the master password is
			cleared from memory after use.
		</p>

		<h3>The Frontend</h3>
		<p>
			Building the UI was a challenge. Initially, I considered <em
				>gtk-rs</em
			>, but after wrestling with its complexity, I pivoted to using
			<em>Tauri</em>
			and <em>WebView</em> to leverage web technologies. After exploring
			my options, I opted for <em>Svelte</em>, thanks to its excellent
			documentation and interactive learning experience.
		</p>

		<p>
			What sold me on Svelte was how everything—scripts, HTML, and
			styles—was contained within a single `.svelte` file. It streamlined
			the development process, making Tailwind redundant, as local styling
			within each component was sufficient.
		</p>

		<h2>Challenges with WebView</h2>
		<p>
			While Tauri’s WebView simplified UI development, it introduced some
			limitations. Window resizing can be sluggish, and I encountered some
			difficulty managing memory securely with JavaScript’s garbage
			collection system, especially when trying to immediately clear
			sensitive data. Although I experimented with zeroing out arrays,
			this led to unexpected behavior, making it feel like a clumsy
			workaround.
		</p>

		<p>
			Ultimately, I moved forward despite these issues, acknowledging that
			WebView’s trade-offs are manageable for the app’s security needs.
		</p>

		<h2>Conclusion</h2>
		<p>
			Building Lockkey significantly improved my Rust skills and
			introduced me to Svelte. While I enjoyed using Tauri, for projects
			that require more control over memory, I’d likely choose a different
			approach. Still, I’d gladly use Tauri for future projects that
			prioritize ease of use and cross-platform support.
		</p>
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

	.project-media {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;

		img {
			width: 80%;
		}

		.github-link {
			width: 80%;
			color: $accent;
			display: flex;
			justify-content: end;
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
</style>
