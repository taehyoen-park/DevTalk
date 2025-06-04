import { postsApi } from './postsModel';


export async function PostsViewModel() {
    
    const posts = await postsApi();
  
    if (!posts) {
        throw new Error('PostsViewModel:Failed to fetch posts');
    }

    if (posts.length === 0) {
        console.warn('No posts found');
        return [];
    }

    // console.log("PostsViewModal posts:", posts);
    return posts ;
}