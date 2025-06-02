
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginApi(form: any) {

    const res = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
    })

    return res.json();
}