const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function postsApi() {
    const res = await fetch(`${BASE_URL}/api/posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
  
        throw new Error('postsAPI:Failed to fetch posts');
    }

    if (res.status === 204) {
        return [];
    }

    const json = await res.json(); 
    
    return json.posts
}
