import SignUpForm from "../../views/signup/SignUpForm";
import { SignUpViewModel } from "../../viewmodels/signup/SignUpViewModel";


export default function SignUpPage() {
    const signUpViewModal = SignUpViewModel();
    return (
        <SignUpForm viewModal={signUpViewModal} />
        // <div></div>
    );
}