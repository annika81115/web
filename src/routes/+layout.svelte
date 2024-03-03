<script>
	import Navbar from "../lib/Navbar.svelte";
</script>


<Navbar />
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