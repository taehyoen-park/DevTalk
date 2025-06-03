import { newPostInterface } from "@/type/newPostInterface";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function newPostApi(form: newPostInterface) {
    
    const res = await fetch(`${BASE_URL}/api/newpost`, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // <- 이거 필수!
    });

    if (!res.ok) {
        throw new Error('Failed to create post');
    }

    return res.json();
}