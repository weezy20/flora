// Loads the blog posts
import { posts } from '$lib/mock';


// Load data from blog_summaries table
export function load() {
    return {
        summaries: posts.map((post: { title: string; slug: string; date: string }) => ({
            title: post.title,
            slug: post.slug,
            date: post.date
        }))
    }
}