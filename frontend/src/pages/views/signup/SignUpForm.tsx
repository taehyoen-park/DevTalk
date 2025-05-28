import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage, } from "@/components/ui/form"
import { User } from "@/type/user"

export default function SignUpForm(  { viewModel } : any) {

const { form, onChange, onSubmit } = viewModel

 return (
  <div className="flex items-center justify-center h-screen bg-white w-full">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-lg w-full border p-8 rounded-lg shadow-lg bg-white">

        {/* name */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} onChange={onChange} />
              </FormControl>
              <FormDescription>공개되는 사용자 이름입니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field}  onChange={onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="비밀번호" {...field}  onChange={onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="비밀번호 확인" {...field} onChange={onChange}  />
              </FormControl>
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

