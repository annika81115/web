<script>
	import Navbar from "$lib/components/Navbar.svelte"
	import Footer from "$lib/components/Footer.svelte"
	export let data;
</script>

<Navbar />

<article class="mdContent">
	<h1>{data.title}</h1>
	{#if data.image}
		<img src="{"/src/routes/lyrics/images/" + data.image}">
	{/if}
	<svelte:component this={data.content} />
	{#if data.image2}
		<img src="{"/src/routes/lyrics/images/" + data.image2}">
	{/if}
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

	img {
		width: 100%;
	    height: 40vh;
	    display: block;
	    border-radius: 50px;
	    overflow: hidden;
	    object-fit: cover;
	    border: 2px solid #B8E89C;
	}
</style>