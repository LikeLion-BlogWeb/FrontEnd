import Footer from "components/common/Footer";
import Header from "components/common/Header";
import PostList from "components/posts/PostList";

export default function List() {

    return (
        <>
            <Header />
            <PostList hasNavigation={false} defaultTab="all" />
            <Footer />
        </>
    )
}