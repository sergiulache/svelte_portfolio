import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Remove the x-robots-tag header
	response.headers.delete('x-robots-tag');

	// Add headers to allow indexing
	response.headers.set('X-Robots-Tag', 'index, follow');

	return response;
};
