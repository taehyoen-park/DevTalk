import LoginUpForm from "../views/login/LoginForm";
import { LoginViewModal } from "../viewmodels/login/LoginViewModal";

export default function LoginPage(){

    const loginViewModal= LoginViewModal();
    return (
        <LoginUpForm viewModal={loginViewModal} />
    );  
}