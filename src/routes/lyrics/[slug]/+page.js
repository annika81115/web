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