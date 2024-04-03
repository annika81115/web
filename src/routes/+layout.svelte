<script>
	import Footer from "$lib/components/Footer.svelte"
	import '$lib/styles/style.css'
</script>

<div class="app-container">
	<slot></slot>
</div>

<Footer />
<div class="app-container">
</div>

<style>
	.app-container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

</style>