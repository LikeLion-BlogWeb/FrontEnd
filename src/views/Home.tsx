import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Slider from "../components/Slider"

export default function Home() {
    return (
        <>
            <Header />
            <Slider />
            <PostList />
            <Footer />
        </>
    )
}