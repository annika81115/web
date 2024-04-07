<script>
	import Navbar from "$lib/components/Navbar.svelte"
	import Footer from "$lib/components/Footer.svelte"
	export let title;
	export let image;
	export let content;
</script>


<Navbar />

<div class="content">
	<h1>{title}</h1>

		<img src={image}>

	<p class="mdContent">
		<slot />
	</p>
</div>

<Footer />

<style>
	.content {
		justify-content: center;
		text-align: center;
		position: absolute;
		top: 5vw;
		width: 55vw;
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