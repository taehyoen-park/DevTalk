import SignUpForm from "../../views/signup/SignUpForm";
import { SignUpViewModel } from "../../viewmodels/signup/SignUpViewModel";


export default function SignUpPage() {
    const signUpViewModal = SignUpViewModel();
    return (
        <SignUpForm viewModel={signUpViewModal} />
        // <div></div>
    );
}