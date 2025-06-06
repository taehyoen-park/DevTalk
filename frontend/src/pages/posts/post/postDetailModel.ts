import { useParams } from 'next/navigation'
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function postDetailApi(params:any) 
{
    // console.log(params);
    const res = await fetch(`${BASE_URL}/api/post/${params.id}`, {
        method: 'GET',
        // body: JSON.stringify(),
        headers: { 'Content-Type': 'application/json' },
        // credentials: 'include', // <- 이거 필수!
    });

    if (!res.ok) {
        throw new Error('Failed to get post');
    }

    return res.json();
}