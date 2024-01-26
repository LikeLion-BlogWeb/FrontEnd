import Footer from "components/common/Footer";
import Header from "components/common/Header";
import PostList from "components/posts/PostList";
import Profile from "components/Profile";

export default function ProfileView() {

    return (
        <>
            <Header />
            <Profile />
            <PostList />
            <Footer />
        </>
    )
}