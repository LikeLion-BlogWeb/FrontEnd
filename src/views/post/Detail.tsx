import Footer from "components/common/Footer"
import Header from "components/common/Header"
import PostDetail from "components/post/PostDetail"

export default function Detail() {

    return (
        <>
            <Header linkTextDisplay={true} />
            <PostDetail />
            <Footer />
        </>
    )
}