/* preloadet alle posts für die '+page.svelte' */
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	return {
		posts
	};
};