import Footer from "components/common/Footer";
import Header from "components/common/Header";
import PostList from "components/article/PostList";

export default function List() {

    return (
        <>
            <Header linkTextDisplay={true} />
            <PostList hasNavigation={false} defaultTab="all" />
            <Footer />
        </>
    )
}