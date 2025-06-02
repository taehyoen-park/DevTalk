import LoginUpForm from "../views/login/LoginForm";
import { LoginViewModel } from "../viewmodels/login/LoginViewModel";

export default function LoginPage(){

    const loginViewModel= LoginViewModel();
    return (
        <LoginUpForm viewModal={loginViewModel} />
    );  
}