import { postDetailApi } from "./postDetailModel";

const postfetch = async() => {
    try{
       // await postDetailApi();
    }
    catch(error) {
        console.error('Error fetch post:', error);
    }
    
}
export function PostDetailViewModel()
{
    postfetch();
    const object = 1;

    return { object }
}