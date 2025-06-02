import { useForm } from "react-hook-form"
import { loginApi } from "@/pages/models/loginModel"
import { useRouter } from 'next/router';

export function LoginViewModel() {
    const router = useRouter();
    const form = useForm<{email:string , password:string}>({
       defaultValues: {
            email: "",
            password: "",
        },
    });
    

    const onSubmit = async (data : any) => {
    
        await loginApi(data)
            .then((response: any)=> {
                if(response.isPasswordCorrect === false) {
                    console.log("로그인 실패:", response);
                }
                   
                else {
                    console.log("로그인 성공:", response);
                    router.push('/');
                }
                                    
            })
            .catch((error: any) => {
                console.error("로그인 실패:", error);
            });

    }

    const onChange = (e: any) => {
      const { name, value } = e.target;
      form.setValue(name, value); // RHF 방식으로 값 설정 
  }
  

    return { form, onSubmit, onChange};
}