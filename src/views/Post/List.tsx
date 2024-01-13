import Footer from "components/Footer";
import Header from "components/Header";
import PostList from "components/PostList";

export default function List() {

    return (
        <>
            <Header />
            <PostList hasNavigation={false} defaultTab="all" />
            <Footer />
        </>
    )
}