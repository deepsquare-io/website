<script lang="ts">
	export let url: string;
</script>

<div class={`container-browser ${$$props.class}`} style={$$props.style}>
	<div class="flex row-browser justify-center items-center">
		<div class="flex-none">
			<span class="dot-browser" style="background:#ED594A;"></span>
			<span class="dot-browser" style="background:#FDD800;"></span>
			<span class="dot-browser" style="background:#5AC05A;"></span>
		</div>
		<div class="mx-4 flex-1" style="white-space: nowrap; overflow: hidden;">
			<div class="url-browser"><span>{url}</span></div>
		</div>
		<div class="flex-none">
			<div style="float: right;">
				<span class="bar-browser"></span>
				<span class="bar-browser"></span>
				<span class="bar-browser"></span>
			</div>
		</div>
	</div>

	<div>
		<slot />
	</div>
</div>

<style>
	/* The browser window */
	.container-browser {
		border: 3px solid #f1f1f1;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		background-color: var(--background-color);
	}

	/* Container for columns and the top "toolbar" */
	.row-browser {
		padding: 10px;
		background: #f1f1f1;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}

	/* Clear floats after the columns */
	.row-browser:after {
		content: '';
		display: table;
		clear: both;
	}

	/* Three dots */
	.dot-browser {
		margin-top: 4px;
		height: 12px;
		width: 12px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
	}

	/* Style the input field */
	.url-browser {
		width: 100%;
		border-radius: 3px;
		border: none;
		background-color: white;
		height: 25px;
		color: #666;
		padding: 2px;
		font-size: 14px;
		font-family: sans-serif;
		text-overflow: ellipsis;
	}

	.url-browser > span {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	/* Three bars (hamburger menu) */
	.bar-browser {
		width: 17px;
		height: 3px;
		background-color: #aaa;
		margin: 3px 0;
		display: block;
	}
</style>
