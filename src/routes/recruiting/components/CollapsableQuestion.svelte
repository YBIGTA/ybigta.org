<script>
	let active = false;

	function toggle() {
		active = !active;
	}
</script>

<li
	on:click={toggle}
	on:keypress={(e) => {
		if (e.key === 'Enter') toggle();
	}}
>
	<div class="question">
		<slot name="question" />
		<i class="bi bi-caret-down-fill" class:active />
	</div>
	<div class="answer" class:active>
		<slot name="answer" />
	</div>
</li>

<style lang="scss">
	@use '$styles/variables.scss' as *;
	li {
		width: 100%;
		padding: 16px;
		border-radius: 8px;
		border: 1px solid var(--color-border);
		position: relative;

		cursor: pointer;
	}
	div.question {
		font-weight: 500;
		@include heading6;
		color: var(--color-title);
		padding-right: 20px;

		&::before {
			content: 'Q';
			font-size: 1.5rem;
			font-weight: 600;
			margin-right: 1rem;
		}
		i {
			position: absolute;
			right: 16px;
			top: 20px;
			transition: transform 0.3s ease;
			&.active {
				transform: rotate(180deg);
			}
		}
	}
	div.answer {
		display: none;
		margin-top: 1.5rem;
		font-weight: 300;
		@include body1;
		word-break: keep-all;
		white-space: pre-wrap;
		color: var(--color-subtitle);

		:global(strong) {
			font-weight: 500;
		}

		&.active {
			display: flex;
		}

		&::before {
			content: 'A';
			font-size: 1.5rem;
			font-weight: 600;
			margin-right: 1rem;
		}
	}
</style>
