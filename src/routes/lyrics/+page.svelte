<script>
	export let data;
	import Navbar from "$lib/components/Navbar.svelte"
</script>

<Navbar />

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>