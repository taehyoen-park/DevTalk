import SignUpForm from "../views/signup/SignUpForm";
import { SignUpViewModal } from "../viewmodels/signup/SignUpViewModal";


export default function SignUpPage() {
    const signUpViewModal = SignUpViewModal();
    return (
        <SignUpForm viewModal={signUpViewModal} />
        // <div></div>
    );
}