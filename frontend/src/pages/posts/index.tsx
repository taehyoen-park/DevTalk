import { useEffect, useState } from 'react';
import PostForm from './postsForm'
import { PostsViewModel } from "./postsViewModel"
import { postInterface } from '@/type/postInterface';

type postWithTimeAgo = postInterface & { timeAgo: string };

function timeAgo(dateStr: string): string {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (diff < 60) return `${diff}초 전`;
        const minutes = Math.floor(diff / 60);
    if (minutes < 60) return `${minutes}분 전`;
        const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}시간 전`;
        const days = Math.floor(hours / 24);
    return `${days}일 전`;
}

export default function PostPage() {

    const [postViewModel, setPostViewModal] = useState<postWithTimeAgo[] | null>(null);

    useEffect(() => {
            const fetchData = async () => {
            const result = await PostsViewModel();
            const postsWithTimeAgo = result.map((post: postWithTimeAgo) => ({
                ...post,
                timeAgo: timeAgo(post.time),
            }));
            setPostViewModal(postsWithTimeAgo);
        };

        fetchData();
    }, []);


    if (!postViewModel) return <div>Loading...</div>; // 로딩 상태 처리
    if (postViewModel.length === 0) return <div>No posts available</div>; // 게시글이 없을 때 처리
    return (
        <div className='bg-[white]'>

            <PostForm viewModel={postViewModel} />
        </div>
        
        // <div></div>
    );
}