import PostDetailForm from "../postDetailForm";
import { PostDetailViewModel } from "../postDetailViewModel";

export default function post()
{
    const postDetailViewModel = PostDetailViewModel();
    
    return (
        <PostDetailForm viewModel={postDetailViewModel}></PostDetailForm>
    )
}