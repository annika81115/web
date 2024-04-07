<script>
	import Navbar from "$lib/components/Navbar.svelte"
	import Footer from "$lib/components/Footer.svelte"
	export let title;
</script>


<Navbar />

<div class="text">
	<h1>{title}</h1>
	<slot />
</div>

<Footer />

<style>
	.text {
		justify-content: center;
		text-align: center;
		position: absolute;
		top: 7vw;
		width: 55vw;
		padding: 10px;
	  	z-index: 500;
	}

</style>