import { Comment } from "components/Comment"
import Footer from "components/common/Footer"
import Header from "components/common/Header"
import PostDetail from "components/post/PostDetail"
import { useParams } from "react-router-dom";

export default function Detail() {
    // postDetail의 param은 post의 id
    const params = useParams();

    return (
        <>
            <Header linkTextDisplay={true} />
            <PostDetail id={params.id || ""}/>
            <Comment id={params.id || ""}/>
            <Footer />
        </>
    )
}