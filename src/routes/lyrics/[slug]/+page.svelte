<script>
	import Navbar from "$lib/components/Navbar.svelte"
	import Footer from "$lib/components/Footer.svelte"
	export let data;
</script>

<Navbar />

<article>
	<h1>{data.title}</h1>
	{data.caption}
	<svelte:component this={data.content} />
</article>

<Footer />

<style>
	article {
		justify-content: center;
		text-align: center;
		position: absolute;
		top: 5vw;
		width: 50vw;
		padding: 10px;
	  	z-index: 500;
	}

</style>