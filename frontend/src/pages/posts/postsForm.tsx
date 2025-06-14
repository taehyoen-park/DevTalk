import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { postInterface } from "@/type/postInterface";
import { useRouter } from 'next/router';
import { createSlug } from '../../lib/createSlug'


type postWithTimeAgo = postInterface & { timeAgo: string };
interface PostFormProps {
    viewModel: postWithTimeAgo[];
}

export default function PostForm({ viewModel }: PostFormProps) {
    const router = useRouter();
    const posts = viewModel;

    return (
        <div className="space-y-3 min-h-screen max-w-3xl mx-auto mt-10">
            <Button className="mb-3" variant="outline" onClick={() => router.push('/ask')}>
                Create New Post
            </Button>   
            {posts.map((p: postWithTimeAgo) => (
                <Card key={p.postid} className="hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                    <CardContent className="space-y-2">
                        <div className="text-xl font-semibold text-ellipsis cursor-pointer" onClick={() => router.push(`/posts/post/${p.postid}/${createSlug(p.title)}`)}>{p.title}</div>
                        <p className="text-gray-600 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{p.content}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {p.tags.map((tag: string) => (
                                    <Badge key={tag} className="bg-gray-200 font-semibold text-[13px] cursor-pointer hover:bg-gray-100 ">{tag}</Badge>
                                ))}
                            </div>
                            <div className="text-gray-500 text-sm">
                                {p.timeAgo}
                            </div>

                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )

}

