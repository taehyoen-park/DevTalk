import SignUpForm from "./SignUpForm";
import { SignUpViewModel } from "./SignUpViewModel";


export default function SignUpPage() {
    const signUpViewModel = SignUpViewModel();
    return (
        <SignUpForm viewModel={signUpViewModel} />
        // <div></div>
    );
}