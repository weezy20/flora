import type { RequestEvent } from '@sveltejs/kit';

export async function load({ params }: RequestEvent) {
    const { slug } = params;
    return {
        currentSlug: slug
    };
}