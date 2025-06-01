import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PostForm({ viewModal }: { viewModal: any }) {
    const { posts } = viewModal;
    console.log("posts:", posts);
    return(
        <div className="space-y-4 min-h-screen max-w-2xl mx-auto p-4 pt-32">
            {posts.map((p: any) => (
            <Card key={p.userid}>
                <CardContent className="space-y-2">
                <div className="text-xl font-semibold">{p.title}</div>
                <p className="text-gray-600 text-sm">{p.content}</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                    {/* {q.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))} */}
                    </div>
                    <Button variant="link" className="text-sm" >
                    자세히 보기
                    </Button>
                </div>
                </CardContent>
            </Card>
            ))}
        </div>
    )

}

