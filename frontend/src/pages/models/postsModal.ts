const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function postsApi() {
    const res = await fetch(`${BASE_URL}/api/posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    console.log("jason으로 바꾸기전 데이터 res:", res);
    const json = await res.json(); // 여기서 실제 데이터를 꺼냄


    return json.posts;
}
