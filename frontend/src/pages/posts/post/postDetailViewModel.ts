import { postDetailApi } from "./postDetailModel";
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { postInterface } from "@/type/postInterface";

export function PostDetailViewModel() {
    const params = useParams()
    const [post, setPost] = useState<postInterface | undefined>()

    useEffect(() => {
        if (!params?.id) return

        const fetchData = async () => {
            try {

                const data = await postDetailApi(params)

                setPost(data)
            } catch (error) {
                console.error('Error fetch post:', error)
            }
        }

        fetchData()
    }, [params])

    if(!post)
    {
        console.log("포스트를 찾을 수 없습니다")
    }
   
    return { post}
}