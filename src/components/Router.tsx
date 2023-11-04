import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Home from "../views/Home";
import PostList from "./PostList";
import PostDetail from "../views/PostDetail";
import PostNew from "../views/PostNew";
import PostEdit from "../views/PostEdit";
import Profile from "../views/Profile";

export default function Router() {
    return (
        <>
            <Routes>
                {/* 진입 지점 */}
                <Route path="/" element={<Home />} />
                {/* 게시물 리스트 볼 수 있는 페이지 */}
                <Route path="/posts" element={<PostList />} />
                {/* 로그인 후 좀 더 디테일한 게시물 목록 페이지? */}
                <Route path="/posts/:id" element={<PostDetail />} />
                {/* 글쓰기 부분 */}
                <Route path="/posts/new" element={<PostNew />} />
                {/* 게시물 편집 */}
                <Route path="/posts/edit/:id" element={<PostEdit />} />
                {/* 프로필 확인 페이지 */}
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