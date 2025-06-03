import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { postInterface } from "@/type/postInterface";

type postWithTimeAgo = postInterface & { timeAgo: string };
interface PostFormProps {
  viewModel: postWithTimeAgo[];
}
export default function PostForm( {viewModel} : PostFormProps) {

    const posts = viewModel;

    return(
        <div className="space-y-4 min-h-screen max-w-2xl mx-auto p-4 pt-32">
            <Button className="mb-4" variant="outline" onClick={() => window.location.href = './app/newpost'}>
                Create New Post 
            </Button>
            {posts.map((p: postWithTimeAgo) => (
                <Card key={p.postid} className="hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                    <CardContent className="space-y-2">
                        <div className="text-xl font-semibold text-ellipsis cursor-pointer">{p.title}</div>
                        <p className="text-gray-600 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{p.content}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {p.tags.map((tag: string) => (
                                    <Badge key={tag} className="bg-gray-200 font-semibold cursor-pointer">{tag}</Badge>
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

