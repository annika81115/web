<script>
	export let data;
	import Navbar from "$lib/components/Navbar.svelte"
	import Footer from "$lib/components/Footer.svelte"
</script>

<Navbar />

<div class="content">

	<h1>Zungenprickler</h1>

	<ul>
		{#each data.posts as post}
			
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				{post.meta.caption}
			
		{/each}
	</ul>
</div>

<Footer />

<style>
	.content {
		text-align: center;
		position: absolute;
		top: 7vw;
		width: 65vw;
	}
</style>