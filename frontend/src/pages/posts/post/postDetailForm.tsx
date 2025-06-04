import { PostDetailViewModel } from "./postDetailViewModel";

export default function PostDetailForm({viewModel} : {viewModel : ReturnType<typeof PostDetailViewModel>}) {
    const num = viewModel;
    return (
        <article className="max-w-2xl mx-auto p-4">
            <header>
                <h3 className="text-2xl font-bold">게시글 제목</h3>
                <p className="text-sm text-gray-500">작성자 • 날짜</p>
            </header>

            <main className="mt-4">
                <p>게시글 본문 내용</p>
            </main>

            <section className="mt-8">
                <h4 className="font-semibold">댓글</h4>
                {/* 댓글 목록 */}
            </section>

        </article>
    )
}