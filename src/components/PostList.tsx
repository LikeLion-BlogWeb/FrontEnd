import { useEffect, useState } from "react"
import { PostContainer, PostEtc, PostListContainer, PostNav, PostNavContainer, PostProfile, PostProfileContainer,PostProfileWrapperLink, PostText, PostTitle, PostUtilContainer, PostUtilDelete, PostUtilEdit } from "./style/postlist.style";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { PostListProps, TabType } from "types/postlist.type";
import { POST_DATA } from "dummy";

export default function PostList({
    hasNavigation = true, 
    defaultTab = "all"} : PostListProps
    ) {
    const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
    const [posts, setPosts] = useState(POST_DATA);
    const {authToken, setAuthToken} = useContext(AuthContext);

    // async function getPosts() {
    //     // 응답값 : 포스트들 : 배열
    //     const response = await fetch("https://port-0-backend-jvpb2mloft5vlw.sel5.cloudtype.app/post", {
    //         method: "GET",
    //     });
    //     const data = await response.json();

    //     console.log(data);
    //     setPosts(data);
    // }

    // useEffect(() => {
    //     getPosts();
    // }, []);
    
    return (
        <>
            {/* 내 글인지, 모두에게 보여지는 글인지 상태에 따라 결정 */}
            {
                hasNavigation && (
                    <PostNavContainer>
                        <PostNav
                            onClick={()=>setActiveTab("all")}
                            active={activeTab === 'all' ? 'active' : ''}
                        >전체</PostNav>
                        <PostNav
                            onClick={()=>setActiveTab("my")}
                            active={activeTab === 'my' ? 'active' : ''}
                        >내 글</PostNav>
                    </PostNavContainer>
                )
            }
            <PostListContainer>
                {
                    posts.map((post: any, idx: number) => (
                        <PostContainer key={idx}>
                            <PostProfileWrapperLink to={`/posts/${post.id}`}>
                                <PostProfileContainer>
                                    <PostProfile />
                                    {/* 글 작성자 이름 & 작성 시간 */}
                                    <PostEtc>이시영</PostEtc>
                                    <PostEtc>{`${post.writeDate.slice(0,9).replace(/-/g, '.')}`}</PostEtc>
                                </PostProfileContainer>

                                <PostTitle>
                                    {`${post.title}`}
                                </PostTitle>
                                <PostText>
                                    {`${post.content}`}
                                </PostText>  
                            </PostProfileWrapperLink>

                            <PostUtilContainer>
                                <PostUtilDelete>삭제</PostUtilDelete>
                                <PostUtilEdit>수정</PostUtilEdit>
                            </PostUtilContainer>
                        </PostContainer>
                    ))
                }
            </PostListContainer>
        </>
    )
}