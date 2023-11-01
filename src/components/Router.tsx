import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import PostNew from "../pages/PostNew";
import PostEdit from "../pages/PostEdit";
import Profile from "../pages/Profile";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/posts/new" element={<PostNew />} />
                <Route path="/posts/edit/:id" element={<PostEdit />} />
                <Route path="/profile" element={<Profile />} />
                {/* 회원가입 + 로그인 페이지 경로 설정 */}
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                {/* default 경로 설정 */}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    )
}