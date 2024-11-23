import { posts } from '$lib/data';
import { error } from '@sveltejs/kit'

// Load the blog post from DB 
export function load({ params }) {
    const post = posts.find(p => p.slug === params.slug)
    if (!post) error(404)
    return {
        post
    }
}