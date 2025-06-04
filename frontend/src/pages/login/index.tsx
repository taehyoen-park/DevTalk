import LoginUpForm from "./LoginForm";
import { LoginViewModel } from "./LoginViewModel";

export default function LoginPage(){

    const loginViewModel= LoginViewModel();
    return (
        <LoginUpForm viewModal={loginViewModel} />
    );  
}