import { useEffect, useState } from 'react';
import PostForm from '../views/post/PostsForm'
import { PostsViewModal } from "../viewmodels/post/PostsViewModal"

export default function PostPage() {

    const [postViewModal, setPostViewModal] = useState<any>(null);

    useEffect(() => {
            const fetchData = async () => {
            const result = await PostsViewModal();
            
            setPostViewModal(result);
        };

        fetchData();
        
    }, []);

    if (!postViewModal) return <div>Loading...</div>; // 로딩 상태 처리
 
    //const posts = await PostsViewModal();

    //console.log("result:", posts);
    return (
        <PostForm viewModal={postViewModal} />
        // <div></div>
    );
}