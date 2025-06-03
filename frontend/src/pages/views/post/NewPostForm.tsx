import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge";
import { NewPostViewModel } from "@/pages/viewmodels/post/NewPostViewModel";
import { newPostInterface } from "@/type/newPostInterface";

export function NewPostForm({ viewModel }: { viewModel: ReturnType<typeof NewPostViewModel> }) {

    const { form, onChange, onSubmit, onTagInputChange, inputValue, tags } = viewModel;
    return (
        <div className="space-y-4 min-h-screen max-w-2xl mx-auto p-4 pt-32">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-lg w-full border p-8 rounded-lg shadow-lg bg-white">

                    {/* title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>title</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} onChange={onChange} />
                                </FormControl>
                                <FormDescription>제목을 입력해주십시오오</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* content */}
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>content</FormLabel>
                                <FormControl>
                                    <Input placeholder="content" {...field} onChange={onChange} />
                                </FormControl>
                                <FormDescription>내용을 입력해주십시오</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* tags */}
                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>tags</FormLabel>
                                <FormControl>
                                    <div className="border rounded-md px-2 py-1 flex flex-wrap items-center gap-2 min-h-[40px]">
                                        {tags.map((tag, idx) => (
                                            <Badge key={idx} variant="outline" className="px-2 py-0.5">
                                                {tag}
                                            </Badge>
                                        ))}

                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={onTagInputChange}// optional: 엔터로 태그 추가 등
                                            className="flex-1 min-w-[100px] outline-none border-none bg-transparent"
                                            placeholder="태그 입력 후 스페이스"
                                        />
                                    </div>
                                </FormControl>
                                <FormDescription>태그를 입력해주세요</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit" className="bg-black text-white w-full ">Submit</Button>

                </form>
            </Form>
        </div>
    );
}