import { PostDetailViewModel } from "./postDetailViewModel";
import { Badge } from "@/components/ui/badge";

export default function PostDetailForm({ viewModel }: { viewModel: ReturnType<typeof PostDetailViewModel> }) {
    const { post } = viewModel;
    console.log(post)
    return (
        <article className="max-w-2xl mx-auto p-4">
            <header>
                <h3 className="text-2xl font-bold">게시글 제목:{post?.title}</h3>
                <p className="text-sm text-gray-500">작성자 • 날짜:{post?.username} • {post?.time}</p>
            </header>

            <main className="mt-4">
                <p>{post?.content}</p>
                <div className="flex gap-2">
                    {post?.tags.map((tag:any, i:number) => (
                        <Badge key={i} className="bg-gray-200 font-semibold text-[13px] cursor-pointer hover:bg-gray-100 ">{tag.tagname}</Badge>
                    ))}
                </div>
            </main>

            <section className="mt-8">
                <h4 className="font-semibold">댓글</h4>
                {/* 댓글 목록 */}
            </section>

        </article>
    )
}