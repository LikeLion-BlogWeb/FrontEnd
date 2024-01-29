import Footer from "components/common/Footer";
import Header from "../../components/common/Header";
import SignupForm from "../../components/SignupForm";

export default function Signup() {
    return (
        <>
            <Header linkTextDisplay={false} />
            <SignupForm />
            <Footer />
        </>
    )
}