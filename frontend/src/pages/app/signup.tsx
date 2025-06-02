import SignUpForm from "../views/signup/SignUpForm";
import { SignUpViewModel } from "../viewmodels/signup/SignUpViewModel";


export default function SignUpPage() {
    const signUpViewModel = SignUpViewModel();
    return (
        <SignUpForm viewModel={signUpViewModel} />
        // <div></div>
    );
}