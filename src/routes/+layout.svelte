<script>
	import '$lib/styles/style.css'
	import '$lib/styles/fonts.css';
	import '$lib/styles/design.css';	
</script>

<div class="app-container">
	<slot></slot>
</div>



<style>
	.app-container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

</style>