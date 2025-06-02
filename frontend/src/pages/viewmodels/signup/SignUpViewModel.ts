import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { signUpApi } from "@/pages/models/signUpModel"
import { signUpInterface } from "@/type/signUpInterface"


export function SignUpViewModel() {

  const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirm: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  })
  }).refine((data) => data.password === data.confirm, {
      path: ["confirm"],
      message: "Passwords do not match.",
    })
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues :{
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const onChange = (e : any) => {
      const { name, value } = e.target;
      form.setValue(name, value); // RHF 방식으로 값 설정 
  }
  
  const onSubmit = async (data: signUpInterface) => {
    await signUpApi(data)
      .then(response => {
        console.log("회원가입 성공:", response);
      })
      .catch(error => {
        console.error("회원가입 실패:", error);
      });
  }

  return { form, onSubmit, onChange };
}