import Footer from "components/common/Footer";
import Header from "components/common/Header";
import PostList from "components/post/PostList";
import Profile from "components/authentication/Profile";

export default function ProfileView() {

    return (
        <>
            <Header linkTextDisplay={true} />
            <Profile />
            <PostList />
            <Footer />
        </>
    )
}