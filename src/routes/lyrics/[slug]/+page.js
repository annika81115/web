/* preloadet den Inhalt aus den Markdowns, um diesen dann der '+page.svelte' zur Verfügung zu stellen */
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, caption, image, image2} = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		caption,
		image,
		image2
	};
}