import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Detail from "views/Post/Detail";
import Edit from "views/Post/Edit";
import List from "views/Post/List";
import New from "views/Post/New";
import ProfileView from "views/ProfileView";

export default function Router({isAuthenticated} : {
    isAuthenticated : boolean
}) {
    
    return (
        <>
            <Routes>
                {
                    isAuthenticated ? (
                        <>
                            {/* 진입 지점 */}
                            <Route path="/" element={<Home />} />
                            {/* 게시물 리스트 볼 수 있는 페이지 */}
                            <Route path="/posts" element={<List />} />
                            {/* 로그인 후 좀 더 디테일한 게시물 목록 페이지? */}
                            <Route path="/posts/:id" element={<Detail />} />
                            {/* 글쓰기 부분 */}
                            <Route path="/posts/new" element={<New />} />
                            {/* 게시물 편집 */}
                            <Route path="/posts/edit/:id" element={<Edit />} />
                            {/* 프로필 확인 페이지 */}
                            <Route path="/profile" element={<ProfileView />} />
                            {/* default 경로 설정 */}
                            <Route path="*" element={<Navigate replace to="/" />} />
                        </>
                    ) : (
                        <>
                            {/* 회원가입 + 로그인 페이지 경로 설정 */}
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="*" element={<Signin />}/>
                        </>
                    )
                }
            </Routes>
        </>
    )
}