import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PostList from "../components/post/PostList";
import Slider from "../components/Slider"

export default function Home() {
    return (
        <>
            <Header />
            <Slider />
            <PostList hasNavigation={true} defaultTab="all" />
            <Footer />
        </>
    )
}