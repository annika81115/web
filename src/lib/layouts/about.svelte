<script>
	import Navbar from "$lib/components/Navbar.svelte"
	export let title;
</script>


<Navbar />

<div class="backdrop" />
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
		width: 65vw;
		padding: 10px;
	  	z-index: 500;
	}

	.backdrop {
		position: fixed;
  		top: 0;
  		width: 75vw;
  		height: 100vh; /* Höhe der gesamten Seite */
  		background-color: rgba(210, 210, 210, 0.5); /* Hintergrundfarbe mit Transparenz */		  
  		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Schatten für Box-Effekt */
	}
</style>