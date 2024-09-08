<script lang="ts">
	import profileImg from "$lib/imgs/pfp.webp";
</script>

<section id="about">
	<div class="about-desc">
		<h2 id="header-md">About me</h2>
		<p>
			Hi! I’m Richard Marin, a software developer with a love for solving
			problems through code. My programming journey began in a school club,
			where we programmed Lego robots. That early introduction sparked a
			lifelong interest in coding, and I’ve been at it ever since.
		</p>
		<p>
			I hold a B.S. in Physics, which I pursued to broaden my understanding of
			the world and sharpen my analytical skills. But even while studying, I
			kept coming back to code—it’s where I really felt at home. I started with
			Python, which helped me get the hang of problem-solving, then moved to C#
			when I got into game development. These days, I’m all about Rust and
			Svelte, using them to build applications that run efficiently both on the
			web and on desktops.
		</p>
		<p>
			Two of my recent projects are Lockkey, a simple secrets manager focused on
			security, and Repeater, a Rust-based framework for real-time
			communication. Both reflect my focus on creating practical solutions to
			technical challenges.
		</p>
		<p>
			Outside of work, I enjoy experimenting with new tech and continuing my
			hobby of game development. If you’ve got an idea you’d like to explore,
			<a
				href="mailto:richard.marin529@protonmail.com?subject=Hi%20there!"
				title="Send an email">let's chat!</a
			>
		</p>
	</div>
	<div class="profile-img">
		<img src={profileImg} alt="Profile" />
	</div>
	<h2 id="header-sm">About me</h2>
</section>

<style lang="scss">
	@import "$lib/styles/colors";
	@import "$lib/styles/breakpoints";

	section#about {
		width: 70%;
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: 4rem;

		#header-sm {
			display: none;
		}

		@media (max-width: $media-lg) {
			gap: 1rem;
			padding: 1rem;
			width: 100%;

			#header-sm {
				display: inline;
			}
			#header-md {
				display: none;
			}
		}

		.about-desc {
			flex-grow: 1;

			@media (max-width: $media-lg) {
				width: 100%;
			}
		}

		.profile-img {
			display: flex;
			justify-content: center;

			img {
				width: 100%;
				box-shadow: 0px 0px 2px 0px rgba($accent, 0.9);

				@media (max-width: $media-lg) {
					width: 50%;
				}
			}
		}

		@media (max-width: $media-lg) {
			flex-direction: column-reverse;
		}
	}

	p {
		margin-top: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.06rem;
	}
</style>
