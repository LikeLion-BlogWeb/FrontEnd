import Footer from "components/common/Footer"
import Header from "../../components/common/Header"
import SigninForm from "../../components/authentication/SigninForm"

export default function Signin() {
    return (
        <>
            <Header linkTextDisplay={false}/>
            <SigninForm />
            <Footer />
        </>
    )
}