<script>
	import Navbar from "$lib/components/Navbar.svelte"
	export let title;
</script>


<Navbar />

<article>
	<h1>{title}</h1>
	<slot />
</article>

<style>
	article {
		justify-content: center;
		text-align: center;
		position: absolute;
		top: 5vw;
		width: 55vw;
		padding: 10px;
	  	z-index: 500;
	}

</style>