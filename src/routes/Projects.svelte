<div class="outer-container">
	<h2>My Projects</h2>
	<div class="inner-container">
		<a href="/lockkey" class="card">
			<h3 class="lockkey">Lockkey</h3>
		</a>
		<a href="/quick-rtc" class="card">
			<h3 class="quick-rtc"><span>Quick</span><span>RTC</span></h3>
		</a>
	</div>
</div>

<style lang="scss">
	@import '$lib/styles/colors';
	@import '$lib/styles/fonts';

	.outer-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		.inner-container {
			display: flex;
			flex-direction: row;
			justify-items: center;
			gap: 2rem;

			.card {
				border: solid 2px $primary;
				padding: 1rem;
				min-width: 24rem;
				min-height: 24rem;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				transition: background-color 0.3s ease-in-out;
				text-decoration: none;
				color: $text;

				> h3 {
					font-size: 2.5rem;
				}

				&:hover {
					background-color: $secondary;
				}
			}
		}
	}
</style>
