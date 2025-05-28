import { User } from '@/type/user' 

export async function signUpApi(form: any) {
    const res = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' },
    })
    

    return res.json()
}