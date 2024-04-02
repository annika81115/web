<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte"
</script>


<Navbar />
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