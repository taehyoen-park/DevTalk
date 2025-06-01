import { postsApi } from '@/pages/models/postsModal';


export async function PostsViewModal() {
    
    const posts = await postsApi();
    if (!posts) {
        throw new Error('Failed to fetch posts');
    }
    if (posts.length === 0) {
        console.warn('No posts found');
        return [];
    }
    
    return { posts };
}